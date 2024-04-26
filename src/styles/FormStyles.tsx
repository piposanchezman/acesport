import styled from "styled-components/native";
import { Colors } from "./GlobalStyles";

const { primary, secondary, tertiary, dark, light, grey, brand, green, red } = Colors;

export const FormContainer = styled.View`
  width: 88%;
  vertical-align: center;
`;

export const FormLabel = styled.Text`
  color: ${secondary};
  font-size: 16px;
  text-align: left;
`;

export const FormInput = styled.TextInput`
  background-color: ${grey};
  padding: 16px;
  padding-right: 56px;
  padding-left: 56px;
  border-radius: 4px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 4px;
  margin-bottom: 16px;
  color: ${tertiary};
`;

export const LeftIcon = styled.View`
  left: 16px;
  top: 40px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 16px;
  top: 40px;
  position: absolute;
  z-index: 1;
`;

export const FormButton = styled.TouchableOpacity`
  background-color: ${brand};
  padding: 16px;
  margin-vertical: 8px;
  margin-top: 16px;
  border-radius: 4px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${dark};
  font-size: 20px;
`;

export const MessageBox = styled.Text<{ type: string }>`
  font-size: 12px;
  text-align: center;
  color: ${(props) => (props.type === "SUCCESS" ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${grey};
  margin-vertical: 8px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${brand};
  font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${secondary};
  font-size: 16px;
`;
