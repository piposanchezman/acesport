import React, { useState, useEffect, useContext } from "react";
import { GameImages } from "data/GamesImages";
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from "react-native";
import { Category } from "interfaces/category";
import { Game } from "interfaces/game";
import CustomCarousel from "carousel-with-pagination-rn";
import MainLayout from "../layouts/MainLayout";
import { getCategories } from "services/category_s";
import { getGames } from "services/game_s";
import { ApiContext } from "context/ApiContext";

const SelectGameView = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const { backendApiCall } = useContext(ApiContext);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesResponse = await getCategories(backendApiCall);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    }
    loadCategories();
  }, [backendApiCall]);

  useEffect(() => {
    async function loadGames() {
      try {
        const gamesResponse = await getGames(backendApiCall);
        setGames(gamesResponse.data);
      } catch (error) {
        console.log("Error fetching games", error);
      }
    }
    loadGames();
  }, [backendApiCall]);

  const categorizedGames = categories.map((category) => ({
    category: category,
    games: games.filter((game) => game.category_id === category._id),
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
          <GameCategory key={category._id} category={category.name} games={games} />
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
