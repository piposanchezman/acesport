import "react-native-gesture-handler";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Slider from "@screens/Slider";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import MyChallenges from "@screens/MyChallenges";
import NewChallenge from "@screens/NewChallenge";
import Login from "@screens/Login";
import Signup from "screens/Signup";

const App = ({ navigation }: { navigation: any }) => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar sesión" onPress={() => props.navigation.navigate("Login")} />
      </DrawerContentScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerContent={(props: any) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Mis Torneos" component={MyChallenges} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slider" component={Slider} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Nuevo Torneo" component={NewChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
