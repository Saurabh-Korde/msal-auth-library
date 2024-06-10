import { PublicClientApplication, Configuration } from "@azure/msal-browser";

export const createMsalConfig = (clientId: string, authority: string, redirectUri: string): Configuration => {
  return {
    auth: {
      clientId,
      authority,
      redirectUri
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    }
  };
};

export const createMsalInstance = (config: Configuration) => {
  return new PublicClientApplication(config);
};

export const loginRequest = {
  scopes: ["User.Read"]
};
