import react, { useState } from "react";
import MainLayout from "layouts/MainLayout";
import axios from "axios";
import { View, Text, TextInput } from "react-native";
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

const { primary, secondary, tertiary, dark, light, grey, brand, green, red } = Colors;

const Signup = ({ navigation }: { navigation: any }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleSignup = (
    credentials: any,
    setSubmitting: any,
    resetForm: any,
    setMessage: any,
    setMessageType: any
  ) => {
    setMessage("");
    const url = `${apiUrl}/users/register/`;
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          setMessageType("SUCCESS");
          setMessage("Registro exitoso.");
          resetForm();
          setTimeout(() => {
            navigation.navigate("Login");
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
      <Title>Registrarse</Title>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (
            values.name === "" ||
            values.email === "" ||
            values.password === "" ||
            values.confirmPassword === ""
          ) {
            setMessage("Por favor, rellena todos los campos.");
            setSubmitting(false);
          } else if (values.password !== values.confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            setSubmitting(false);
          } else {
            setMessage("");
            handleSignup(values, setSubmitting, resetForm, setMessage, setMessageType);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <FormContainer>
            <FormComponent
              label="Nombre completo"
              icon="person"
              placeholder="Pepito Perez"
              placeholderTextColor={light}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              isPassword={false}
              hidePassword={false}
              setHidePassword={() => {}}
            ></FormComponent>
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
              hidePassword={false}
              setHidePassword={() => {}}
            ></FormComponent>
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
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            ></FormComponent>
            <FormComponent
              label="Confirmar contraseña"
              icon="lock"
              placeholder="* * * * * * * * *"
              placeholderTextColor={light}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            ></FormComponent>
            <Line></Line>
            <MessageBox type={messageType}>{message}</MessageBox>
            <FormButton onPress={handleSubmit}>
              <ButtonText>Registrarse</ButtonText>
            </FormButton>
            <ExtraView>
              <ExtraText>¿Ya tienes una cuenta? </ExtraText>
              <TextLink>
                <TextLinkContent onPress={() => navigation.navigate("Login")}>
                  Inicia sesión
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

export default Signup;
