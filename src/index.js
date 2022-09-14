import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-3vswa2j9.us.auth0.com'
      clientId='QBltCpi45iM0B0UrHdRYv8qom97SYx22'
      redirectUri={window.location.origin}>
        <UserProvider>
          <App />
        </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

