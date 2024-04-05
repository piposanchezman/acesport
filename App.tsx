import 'react-native-gesture-handler';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Slider from './screens/Slider';
import Home from './screens/Home';
import Profile from './screens/Profile';
import MyChallenges from './screens/MyChallenges';
import NewChallenge from './screens/NewChallenge';

const Navigation = () => {
  const {clearSession, user, error, isLoading} = useAuth0();

  const onLogout = async () => {
    console.log('user', user);
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return (
      <View style={{height: '100%'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const loggedIn = user !== undefined && user !== null;
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar sesión" onPress={onLogout} />
      </DrawerContentScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Mis Torneos" component={MyChallenges} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    );
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {loggedIn && (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Nuevo Torneo" component={NewChallenge} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {!loggedIn && (
        <>
          <Slider />
        </>
      )}
      {error && <Text>{error.message}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain={'dev-3salztzbb4ux5rf3.us.auth0.com'}
      clientId={'Evqh0cd2zVsR7AgpIWNJcbGK3xsEn03B'}>
      <Navigation />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
