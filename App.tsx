import "react-native-gesture-handler";
import React from "react";
import { Auth0Provider } from "react-native-auth0";
import AppNav from "navigation/AppNav";

function App() {
  const auth0Domain = process.env.EXPO_PUBLIC_AUTH0_DOMAIN;
  const auth0ClientId = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID;
  return (
    <Auth0Provider domain={auth0Domain as string} clientId={auth0ClientId as string}>
      <AppNav />
    </Auth0Provider>
  );
}

export default App;
