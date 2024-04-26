import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "layouts/MainLayout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }: { navigation: any }) => {
  const [userData, setUserData] = useState<{ name: string } | null>(null);

  const fetchData = async () => {
    try {
      const dataToken = await AsyncStorage.getItem("accessToken");
      const url = "http://192.168.0.26:6500/api/users/profile/";
      const response = await axios.get(url, { headers: { Authorization: `Bearer ${dataToken}` } });
      const result = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleCreateTournament = () => {
    navigation.navigate("Nuevo Torneo");
  };

  useEffect(() => {
    fetchData().then((result) => {
      setUserData(result);
    });
  }, []);

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
        {userData ? (
          <Text style={{ color: "#f3c884" }}>{userData.name}</Text>
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
