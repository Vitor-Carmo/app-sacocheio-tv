import styled from "styled-components/native";
import PlayListImage from "../../assets/image/playlist.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity } from "react-native";

export const Container = styled(LinearGradient)`
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export const Tab = styled.View<{ isFocused: boolean }>`
  align-items: center;
  justify-content: center;
  height: 100%;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
`;

export const TabTitle = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
