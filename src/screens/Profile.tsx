import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import MainLayout from "layouts/MainLayout";

const Profile = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image source={{}} style={styles.profileImage} />
        <Text style={styles.text}>Name: {}</Text>
        <Text style={styles.text}>Email: {}</Text>
      </View>
    </MainLayout>
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
