import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { ApiContext } from "context/ApiContext";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import MyChallenges from "@screens/MyChallenges";
import NewChallenge from "@screens/NewChallenge";
import { useAuth0 } from "react-native-auth0";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomDrawerContent = (props: any) => {
  const { clearSession } = useAuth0();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cerrar sesión" onPress={clearSession} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Mis Torneos" component={MyChallenges} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="NewChallenge" component={NewChallenge} />
    </Stack.Navigator>
  );
};

export default AppStack;
