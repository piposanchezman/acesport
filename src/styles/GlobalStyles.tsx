import styled from "styled-components/native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#056CF2",
  secondary: "#034AA6",
  tertiary: "#022859",
  dark: "rgba(0, 0, 0, 0.8)",
  light: "rgba(255, 255, 255, 0.8)",
  grey: "#9CA3AF",
  brand: "#F2C185",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, dark, light, brand, green, red } = Colors;

export const MainContainer = styled.SafeAreaView`
  background-color: ${dark};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled.Image`
  width: 400px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  padding: 12px;
  color: ${brand};
`;

export const Subtitle = styled.Text`
  font-size: 24px;
  text-align: center;
  padding: 8px;
  color: ${light};
`;

export const Article = styled.Text`
  font-size: 16px;
  text-align: center;
  padding: 4px;
  color: ${brand};
`;
