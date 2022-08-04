import React, { useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { FORGOT_PASSWORD_LINK } from "../../constants";
import { Title } from "../../styles/global";

import {
  Container,
  Head,
  Description,
  InformationAccount,
  EmailInput,
  PasswordContainerInput,
  PasswordInput,
  TouchableChangePasswordStateButton,
  ForgotYourPassword,
  SignInButton,
  SignInText,
} from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const { IMAGES, COLORS } = useTheme();

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleForgotPassword = () => {
    Linking.openURL(FORGOT_PASSWORD_LINK);
  };

  const handleSignIn = () => {
    navigation.navigate("AppStack");
  };

  return (
    <Container source={IMAGES.LOGIN_BACKGROUND}>
      <Head>
        <Title fontSize="26px" marginBottom="5px">
          Bem vindo, ouvinte!
        </Title>
        <Description>
          Entre com seu email e comece a se divertir escutando as poluções
          sonoras encontradas aqui nessa plataforma de podcasts
        </Description>
      </Head>

      <InformationAccount>INFORMAÇÕES DA CONTA</InformationAccount>
      <EmailInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor={COLORS.TEXT_60}
      />
      <PasswordContainerInput>
        <PasswordInput
          value={password}
          onChangeText={(text) => setPassWord(text)}
          placeholderTextColor={COLORS.TEXT_60}
          secureTextEntry={!showPassword}
        />
        <TouchableChangePasswordStateButton onPress={handleShowPassword}>
          {!showPassword ? (
            <IMAGES.PASSWORD_EYE_VISIBLE />
          ) : (
            <IMAGES.PASSWORD_EYE_INVISIBLE />
          )}
        </TouchableChangePasswordStateButton>
      </PasswordContainerInput>

      <TouchableOpacity onPress={handleForgotPassword}>
        <ForgotYourPassword>Esqueceu sua senha?</ForgotYourPassword>
      </TouchableOpacity>

      <SignInButton onPress={handleSignIn}>
        <SignInText>Entrar</SignInText>
      </SignInButton>
    </Container>
  );
}
