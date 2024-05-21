import React, { useState } from "react";
import MainLayout from "layouts/MainLayout";
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
import { AuthContext } from "context/ApiContext";
import { useAuth0 } from "react-native-auth0";

const { primary, light, brand } = Colors;

const Login = ({ navigation }: { navigation: any }) => {
  const { user } = useAuth0();
  const { login } = React.useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = async (
    credentials: any,
    setSubmitting: any,
    resetForm: any,
    setMessage: any,
    setMessageType: any
  ) => {
    setMessage("");
    setSubmitting(true);
    const result: any = await login(credentials);
    console.log(result);
    if (result.status === 404) {
      setMessageType("ERROR");
      setMessage("No se ha podido iniciar sesión.");
    }
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
