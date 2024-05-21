import { View, ActivityIndicator } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApiContext } from "context/ApiContext";
import { AppContext } from "../context/AppContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const AppNav = () => {
  const { userToken } = React.useContext(ApiContext);
  const { appContextIsFetching } = React.useContext(AppContext);

  if (appContextIsFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>{userToken !== null ? <AppStack /> : <AuthStack />}</NavigationContainer>
  );
};

export default AppNav;
