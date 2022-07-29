import styled from "styled-components/native";
import { LinearGradient as RNLinearGradient } from "expo-linear-gradient";

import { ScrollView } from "react-native";

export const LinearGradient = styled(RNLinearGradient).attrs({
  colors: ["#453612", "#202020", "#202020"],
})`
  flex: 1;
  padding: 45px 0px;
  padding-bottom: 70px;
`;
