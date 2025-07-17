import { PublicClientApplication } from '@azure/msal-browser';

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: '81170924-9220-4d09-91aa-149770a67ea8',
    authority: 'https://login.microsoftonline.com/48fdc449-6948-4ae0-ba7b-e7fe9025b0dc',
    redirectUri: 'http://localhost:3000',
  },
});
