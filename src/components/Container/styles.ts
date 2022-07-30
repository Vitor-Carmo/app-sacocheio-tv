import styled from "styled-components/native";
import { LinearGradient as RNLinearGradient } from "expo-linear-gradient";

export const LinearGradient = styled(RNLinearGradient).attrs({
  colors: ["#453612", "#202020", "#202020"],
})`
  flex: 1;
  padding: 45px 0px;
  padding-bottom: 70px;
  height: 100%;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
