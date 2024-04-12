import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  const handleCreateTournament = () => {
    navigation.navigate("Nuevo Torneo");
  };

  return (
    <ImageBackground source={require("../assets/Background.png")} imageStyle={{ opacity: 0.5 }}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#141414",
          opacity: 0.75,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/Logo.png")}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text
          style={{
            fontSize: 48,
            fontWeight: "bold",
            marginTop: 32,
            color: "#0062FF",
          }}
        >
          Acesports
        </Text>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 8,
            color: "#ffffff",
          }}
        >
          Acesports es una aplicación para la gestión de torneos de videojuegos.
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 24,
            color: "#f6ddb3",
          }}
        >
          Bienvenido,{" "}
          <Text
            style={{
              color: "#f3c884",
            }}
          ></Text>
        </Text>
        <TouchableOpacity onPress={handleCreateTournament}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 6,
            }}
          >
            ¿Quieres crear un torneo? Haz click{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#635dff",
              }}
            >
              aquí
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
