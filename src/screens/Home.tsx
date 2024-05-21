import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { useAuth0 } from "react-native-auth0";
import MainLayout from "layouts/MainLayout";

const Home = ({ navigation }: { navigation: any }) => {
  const { user } = useAuth0();

  const handleCreateTournament = () => {
    navigation.navigate("NewChallenge");
  };

  return (
    <MainLayout>
      <Image
        source={require("../assets/AcesportIcon.png")}
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
        {user ? (
          <Text style={{ color: "#f3c884" }}>{user.name}</Text>
        ) : (
          <Text style={{ color: "#f3c884" }}>Loading...</Text>
        )}
      </Text>
      <TouchableOpacity onPress={handleCreateTournament}>
        <Text
          style={{
            fontSize: 16,
            marginTop: 6,
            color: "#ffffff",
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
    </MainLayout>
  );
};

export default Home;
