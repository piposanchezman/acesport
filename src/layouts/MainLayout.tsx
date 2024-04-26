import React from "react";
import { ImageBackground } from "react-native";
import { MainContainer } from "../styles/GlobalStyles";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={require("../assets/Background.png")} imageStyle={{ opacity: 0.5 }}>
      <MainContainer>{children}</MainContainer>
    </ImageBackground>
  );
};

export default MainLayout;
