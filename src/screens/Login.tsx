import React, { useState } from "react";
import MainLayout from "layouts/MainLayout";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { Colors, AppLogo, Title } from "styles/GlobalStyles";
import {
  FormContainer,
  FormInput,
  FormLabel,
  LeftIcon,
  RightIcon,
  FormButton,
  ButtonText,
  MessageBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "styles/FormStyles";
import { Octicons } from "@expo/vector-icons";

const { primary, light, brand } = Colors;

const Login = ({ navigation }: { navigation: any }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = (
    credentials: any,
    setSubmitting: any,
    resetForm: any,
    setMessage: any,
    setMessageType: any
  ) => {
    setMessage("");
    const url = `${apiUrl}/users/authenticate/`;
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const accessToken = result.accessToken;
        AsyncStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        if (result !== null) {
          setMessageType("SUCCESS");
          setMessage("Inicio de sesión correcto.");
          resetForm();
          setTimeout(() => {
            navigation.navigate("Home");
          }, 700);
        } else {
          setMessageType("ERROR");
          setMessage(result.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
        setMessage("Error de conexión. Inténtalo de nuevo.");
      })
      .finally(() => {
        setSubmitting(false);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      });
  };

  return (
    <MainLayout>
      <AppLogo source={require("../assets/AcesportBanner.png")} />
      <Title>Iniciar sesión</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (values.email === "" || values.password === "") {
            setMessage("Por favor, rellena todos los campos.");
            setSubmitting(false);
          } else {
            setMessage("");
            handleLogin(values, setSubmitting, resetForm, setMessage, setMessageType);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
          <FormContainer>
            <FormComponent
              label="Correo electrónico"
              icon="mail"
              placeholder="username@example.com"
              placeholderTextColor={light}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              isPassword={false}
            />
            <FormComponent
              label="Contraseña"
              icon="lock"
              placeholder="* * * * * * * * *"
              placeholderTextColor={light}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              setHidePassword={setHidePassword}
            />
            <Line />
            <MessageBox type={messageType}>{message}</MessageBox>
            {!isSubmitting && (
              <FormButton onPress={handleSubmit}>
                <ButtonText>Iniciar sesión</ButtonText>
              </FormButton>
            )}
            {isSubmitting && (
              <FormButton disabled={true}>
                <ActivityIndicator size="large" color={primary} />
              </FormButton>
            )}
            <ExtraView>
              <ExtraText>¿No tienes una cuenta? </ExtraText>
              <TextLink>
                <TextLinkContent onPress={() => navigation.navigate("Signup")}>
                  Regístrate
                </TextLinkContent>
              </TextLink>
            </ExtraView>
          </FormContainer>
        )}
      </Formik>
    </MainLayout>
  );
};

const FormComponent = ({ label, icon, isPassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <FormLabel>{label}</FormLabel>
      <FormInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword((prev: any) => !prev)}>
          <Octicons name={props.secureTextEntry ? "eye-closed" : "eye"} size={30} color={light} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
