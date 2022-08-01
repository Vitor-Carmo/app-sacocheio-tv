import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 30px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;
export const Head = styled.View`
  align-items: center;
`;

export const Description = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT_40};
  max-width: 320px;
  margin-bottom: 15px;
`;

export const InformationAccount = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_60};
  margin-bottom: 15px;
`;

export const EmailInput = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
  autoCompleteType: "email",
  keyboardType: "email-address",
  returnKeyType: "next",
  placeholder: "Email",
  textContentType: "emailAddress",
})`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};

  background-color: ${({ theme }) => theme.COLORS.FOREGROUND};

  width: 100%;
  height: 50px;

  border-radius: 6px;

  padding: 0 16px;
  margin-bottom: 15px;
`;

export const PasswordContainerInput = styled.View`
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND};
  width: 100%;
  height: 50px;
  flex-direction: row;

  border-radius: 6px;
  padding: 0 16px;
  margin-bottom: 30px;
`;

export const PasswordInput = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
  autoCompleteType: "password",
  keyboardType: "default",
  returnKeyType: "done",
  placeholder: "Senha",
  textContentType: "password",
})`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  width: 85%;
  height: 100%;
`;

export const TouchableChangePasswordStateButton = styled.TouchableOpacity.attrs(
  {
    activeOpacity: 0.8,
  }
)`
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
`;

export const ForgotYourPassword = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  color: #0083cd;
  margin-bottom: 30px;
`;

export const SignInButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.SECONDARY};

  width: 100%;
  height: 50px;

  border-radius: 6px;
  margin-bottom: 30px;
`;

export const SignInText = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
