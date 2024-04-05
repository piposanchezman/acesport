import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const MyChallenges = () => {
  return (
    <ImageBackground
      source={require('../assets/Background.png')}
      style={{flex: 1, justifyContent: 'center'}}
      imageStyle={{opacity: 0.5}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 32, color: '#f6ddb3', paddingTop: 80}}>
          NO HAY CHALLENGES
        </Text>
        <Text style={{fontSize: 24, color: '#f6ddb3'}}>Añade el primero</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0062FF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyChallenges;
