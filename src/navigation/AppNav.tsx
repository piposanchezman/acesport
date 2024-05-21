import { View, ActivityIndicator } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApiContext } from "context/ApiContext";
import { AppContext } from "../context/AppContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth0 } from "react-native-auth0";
import { get } from "http";

const AppNav = () => {
  const { user } = useAuth0();
  const { authorize } = useAuth0();
  const { getCredentials } = useAuth0();
  const { appContextIsFetching } = React.useContext(AppContext);

  // const getToken = async () => {
  //   try {
  //     const drEnvioToken = await authorize({
  //       audience: "http://localhost:5000/",
  //       scope: "read:current_user, update:current_user_metadata",
  //     });
  //     console.log(drEnvioToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getToken();

  if (appContextIsFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <NavigationContainer>{user !== null ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default AppNav;
