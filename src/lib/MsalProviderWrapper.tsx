import React, { ReactNode } from 'react';
import { MsalProvider } from '@azure/msal-react';
import { createMsalConfig, createMsalInstance } from './authConfig';

interface MsalProviderWrapperProps {
  clientId: string;
  authority: string;
  redirectUri: string;
  children: ReactNode;
}

const MsalProviderWrapper: React.FC<MsalProviderWrapperProps> = ({ clientId, authority, redirectUri, children }) => {
  const msalConfig = createMsalConfig(clientId, authority, redirectUri);
  const msalInstance = createMsalInstance(msalConfig);

  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
};

export default MsalProviderWrapper;
