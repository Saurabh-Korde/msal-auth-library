# MSAL Authentication Library

This library provides authentication functionalities using Microsoft Authentication Library (MSAL) for React applications.

## Installation

To install the library and its dependencies, run the following command:

```bash
npm i msal-auth-library

<!-- Usage -->

import React from 'react';
import ReactDOM from 'react-dom';
import { MsalProvider } from '@azure/msal-react';
import { AuthProvider } from 'msal-auth-library';

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <AuthProvider
        clientId={import.meta.env.VITE_CLIENT_ID}
        authority={import.meta.env.VITE_AUTHORITY}
        redirectUri={import.meta.env.VITE_REDIRECT_URI}
        groupId="your-group-id"
      />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
