import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Linking } from "react-native";
import { useTheme } from "styled-components";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";
import { signIn } from "../../store/duck/auth";
import {
  LINKS,
  ERROS,
  SUCCESS,
  REGEX,
  ASYNC_STORAGE_KEYS,
} from "../../constants";
import { Title } from "../../styles/global";
import { Spinner } from "../../components";

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
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { IMAGES, COLORS } = useTheme();

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleForgotPassword = () => {
    Linking.openURL(LINKS.FORGOT_PASSWORD);
  };

  const handleSignIn = async () => {
    if (!email.match(REGEX.EMAIL)) {
      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: ERROS.INVALID_EMAIL_ERROR,
      });
      return;
    }

    setLoading(true);
    try {
      const {
        data: {
          data: { id, token, userName },
        },
      } = await api.post<SignInResponse>("/user/login", {
        email: email,
        senha: password,
      });

      if (!!token && !!id && !!userName) {
        AsyncStorage.setItem(
          ASYNC_STORAGE_KEYS.USER_DATA,
          JSON.stringify({ id, token, userName })
        ).then(() => {
          dispatch({
            type: signIn.type,
            payload: { id, token, userName },
          });
        });

        Toast.show({
          type: "success",
          text1: "Autenticação feita com sucesso",
          text2: SUCCESS.AUTHENTICATION_SUCCESS,
        });

        setEmail("");
        setPassWord("");
        return;
      }
      Toast.show({
        type: "error",
        text1: "Falha na autenticação",
        text2: ERROS.AUTHENTICATION_ERROR,
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: ERROS.UNKNOWN_AUTHENTICATION_ERROR,
      });
    } finally {
      setLoading(false);
    }
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

      <ForgotYourPassword onPress={handleForgotPassword}>
        Esqueceu sua senha?
      </ForgotYourPassword>

      <SignInButton disabled={loading} onPress={handleSignIn}>
        {!loading ? (
          <SignInText>Entrar</SignInText>
        ) : (
          <Spinner color={COLORS.FOREGROUND} size={26} />
        )}
      </SignInButton>
    </Container>
  );
}
