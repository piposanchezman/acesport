import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const gamesData = {
  Moba: [
    {name: 'League of Legends', image: require('../assets/LoLIcon.png')},
    {name: 'Dota2', image: require('../assets/DotaIcon.png')},
    {name: 'Smite', image: require('../assets/SmiteIcon.png')},
  ],
  Shooters: [
    {name: 'Valorant', image: require('../assets/ValorantIcon.png')},
    {name: 'CS:GO', image: require('../assets/CSGOIcon.png')},
    {name: 'Overwatch', image: require('../assets/LoLIcon.png')},
  ],
  BattleRoyale: [
    {name: 'Fortnite', image: require('../assets/LoLIcon.png')},
    {name: 'PUBG', image: require('../assets/LoLIcon.png')},
    {name: 'Warzone', image: require('../assets/LoLIcon.png')},
  ],
};

const GameCategory = ({
  category,
  games,
}: {
  category: string;
  games: Array<{name: string; image: any}>;
}) => (
  <View style={{marginTop: 30}}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
      }}>
      {category}
    </Text>
    <Carousel
      data={games}
      renderItem={({item}) => (
        <View style={styles.gameContainer}>
          <Image source={item.image} style={styles.gameImage} />
          <Text style={{fontSize: 16}}>{item.name}</Text>
        </View>
      )}
      sliderWidth={400}
      itemWidth={150}
      style={{marginRight: 20}}
    />
  </View>
);

const SelectGameView = () => (
  <ImageBackground
    source={require('../assets/Background.png')}
    imageStyle={{opacity: 0.5}}
    style={{height: '100%'}}>
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#141414',
        opacity: 0.75,
        height: '100%',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 20,
            alignSelf: 'center',
          }}>
          Selecciona tu juego
        </Text>
        <Searchbar
          placeholder="Buscar juego..."
          value=""
          style={{marginLeft: 20, marginRight: 20}}
        />
        {Object.entries(gamesData).map(([category, games]) => (
          <GameCategory key={category} category={category} games={games} />
        ))}
      </ScrollView>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  gameImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default SelectGameView;
