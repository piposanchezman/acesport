import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import {Onboarding} from './views/Onboarding';

const Home = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();
  console.log('user', user);

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {loggedIn && (
          <Text style={{color: '#000'}}>You are logged in as {user.name}</Text>
        )}
        {!loggedIn && (
          <>
            <Onboarding />
            <Text style={{color: '#000'}}>You are not logged in</Text>
            <Button onPress={onLogin} title="Log In" />
          </>
        )}
        {error && <Text>{error.message}</Text>}

        {loggedIn && <Button onPress={onLogout} title="Log Out" />}
      </NavigationContainer>
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain={'dev-3salztzbb4ux5rf3.us.auth0.com'}
      clientId={'Evqh0cd2zVsR7AgpIWNJcbGK3xsEn03B'}>
      <Home />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
