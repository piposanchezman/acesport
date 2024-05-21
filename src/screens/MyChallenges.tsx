import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import MainLayout from "layouts/MainLayout";

const MyChallenges = ({ navigation }: { navigation: any }) => {
  const handleCreateTournament = () => {
    navigation.navigate("NewChallenge");
  };

  return (
    <MainLayout>
      <Text style={{ fontSize: 32, color: "#f6ddb3", paddingTop: 80 }}>NO HAY CHALLENGES</Text>
      <Text style={{ fontSize: 24, color: "#f6ddb3" }}>Añade el primero</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleCreateTournament}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0062FF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

export default MyChallenges;
