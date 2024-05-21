import React from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth0 } from "react-native-auth0";
import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const { user } = useAuth0();

  return <NavigationContainer>{user !== null ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default AppNav;
