// App.js
import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import Index from './app/index';

const DOMAIN = "dev-zu324xu4xeuw1wo7.us.auth0.com";
const CLIENT_ID = "Rbkrp0AsRV2djN8qgUIetn7lTl4rMrVb";

const App = () => {
    return (
        <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID}>
            <Index />
        </Auth0Provider>
    );
};

export default App;
