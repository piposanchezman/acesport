import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";

const Profile = () => {
  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={{ flex: 1, justifyContent: "center" }}
      imageStyle={{ opacity: 0.5 }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#141414",
          opacity: 0.75,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          <Image source={{}} style={styles.profileImage} />
          <Text style={styles.text}>Name: {}</Text>
          <Text style={styles.text}>Email: {}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
});

export default Profile;
