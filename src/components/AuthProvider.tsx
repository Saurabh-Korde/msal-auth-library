// src/components/AuthProvider.tsx

import React, { useEffect, useState } from 'react';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { initializeMSAL } from '../utils/msalConfig';

interface AuthProviderProps {
  clientId: string;
  authority: string;
  redirectUri: string;
  groupId: string;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ clientId, authority, redirectUri, groupId }) => {
  const { instance, accounts } = useMsal();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const msalInstance = initializeMSAL({ clientId, authority, redirectUri });

    if (accounts && accounts.length > 0) {
      checkGroupMembership(msalInstance, groupId);
    }
  }, [clientId, authority, redirectUri, accounts, groupId]);

  const checkGroupMembership = async (msalInstance: any, groupId: string) => {
    // Logic to check group membership using MS Graph API
    // Similar to your checkGroupMembership function in service.tsx
  };

  const handleLogin = () => {
    instance.loginPopup().catch((e: any) => {
      console.error(e);
    });
  };

  return (
    <div>
      <AuthenticatedTemplate>
        {isAuthorized ? (
          <div>
            {/* Your authenticated content */}
          </div>
        ) : (
          <div>You do not have access to this application.</div>
        )}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleLogin}>Sign In</button>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default AuthProvider;
