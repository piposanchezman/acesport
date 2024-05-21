import "react-native-gesture-handler";
import React from "react";
import { Auth0Provider } from "react-native-auth0";
import AppNav from "navigation/AppNav";

function App() {
  return (
    <Auth0Provider
      domain={"dev-kllowhtqsd8qirzp.us.auth0.com"}
      clientId={"vfNbwg8b9baJme8pmUHGWyNDCubVC3xE"}
    >
      <AppNav />
    </Auth0Provider>
  );
}

export default App;
