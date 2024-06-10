import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import axios from 'axios';

export const useMsalAuth = (groupId: string) => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ["User.Read"]
    }).catch(e => {
      console.error(e);
    });
  };

  const getAccessToken = async () => {
    const account = accounts[0];
    const response = await instance.acquireTokenSilent({
      scopes: ["User.Read"],
      account: account
    });
    return response.accessToken;
  };

  const checkGroupMembership = async () => {
    const accessToken = await getAccessToken();
    const graphResponse = await axios.get(
      'https://graph.microsoft.com/v1.0/me/memberOf',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    const groups = graphResponse.data.value;
    return groups.some((group: { id: string }) => group.id === groupId);
  };

  return { handleLogin, isAuthenticated, checkGroupMembership, getAccessToken };
};
