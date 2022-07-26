import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const Container = styled.View``;

export const Content = styled.View`
  width: 75%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScrollHorizontal = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: ${width}px;
  margin-left: -15px;
  padding: 30px 15px;
`;
