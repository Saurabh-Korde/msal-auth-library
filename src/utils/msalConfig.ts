// src/utils/msalConfig.ts

import { Configuration, PublicClientApplication } from "@azure/msal-browser";

export interface MSALConfig {
  clientId: string;
  authority: string;
  redirectUri: string;
}

export const initializeMSAL = (config: MSALConfig): PublicClientApplication => {
  const msalConfig: Configuration = {
    auth: {
      clientId: config.clientId,
      authority: config.authority,
      redirectUri: config.redirectUri
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    }
  };

  return new PublicClientApplication(msalConfig);
};
