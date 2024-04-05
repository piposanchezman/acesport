import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const Profile = () => {
  const {user} = useAuth0();

  return (
    <ImageBackground
      source={require('../assets/Background.png')}
      style={{flex: 1, justifyContent: 'center'}}
      imageStyle={{opacity: 0.5}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#141414',
          opacity: 0.75,
          height: '100%',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          {user ? (
            <>
              <Image source={{uri: user.picture}} style={styles.profileImage} />
              <Text style={styles.text}>Name: {user.name}</Text>
              <Text style={styles.text}>Email: {user.email}</Text>
            </>
          ) : (
            <Text>Loading user data...</Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // La mitad del ancho y alto para hacerla circular
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
});

export default Profile;
