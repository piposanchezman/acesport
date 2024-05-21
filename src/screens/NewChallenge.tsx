import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GameImages } from "data/GamesImages";
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from "react-native";
import { Searchbar } from "react-native-paper";
import CustomCarousel from "carousel-with-pagination-rn";
import MainLayout from "../layouts/MainLayout";

interface Category {
  id: number;
  name: string;
}

interface Game {
  id: number;
  name: string;
  image: string;
  category_id: number;
}

const SelectGameView = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const fetchData = async (url: string) => {
    try {
      const dataToken = await AsyncStorage.getItem("accessToken");
      const response = await axios.get(url, { headers: { Authorization: `Bearer ${dataToken}` } });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    fetchData(`${apiUrl}/categories/all/`).then((result) => {
      setCategories(result);
    });
  }, []);

  useEffect(() => {
    fetchData(`${apiUrl}/games/all/`).then((result) => {
      setGames(result);
    });
  }, []);

  const categorizedGames = categories.map((category) => ({
    category: category,
    games: games.filter((game) => game.category_id === category.id),
  }));

  return (
    <MainLayout>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginVertical: 20,
            alignSelf: "center",
            color: "#ffffff",
          }}
        >
          Selecciona tu juego
        </Text>
        {categorizedGames.map(({ category, games }) => (
          <GameCategory key={category.id} category={category.name} games={games} />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

const GameCategory = ({ category, games }: { category: string; games: Game[] }) => (
  <View style={{ marginTop: 30 }}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 20,
        color: "#ffffff",
      }}
    >
      {category}
    </Text>
    <CustomCarousel
      data={games}
      disablePagination={true}
      renderItem={({ item }) => {
        return (
          <View style={styles.gameContainer}>
            <Image source={GameImages[item.name]} style={styles.gameImage} />
            <Text style={{ fontSize: 16, color: "#ffffff" }}>{item.name}</Text>
          </View>
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  gameContainer: {
    alignItems: "center",
    height: 150,
    width: 150,
  },
  gameImage: {
    flex: 0.8,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default SelectGameView;
