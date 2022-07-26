import styled from "styled-components/native";
import { ImageBackground } from "react-native";
//import RNLinearGradient from "react-native-linear-gradient";
import {LinearGradient as RNLinearGradient} from 'expo-linear-gradient';

export const Container = styled.View<{ marginRight?: string }>`
  width: 258px;
  height: 452px;
  margin-right: ${({ marginRight }) => marginRight ?? "15px"};
`;

export const Info = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Episode = styled(ImageBackground)`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  flex: 1;
  justify-content: flex-end;
`;

export const LinearGradient = styled(RNLinearGradient).attrs({
  colors: ["transparent", "black"],
})`
  padding: 20px;
`;
