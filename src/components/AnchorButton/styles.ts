import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ANCHOR_BUTTON_BACKGROUND};
  flex: 1;
`;

export const Text = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 11px;
  color: ${({ theme }) => theme.COLORS.ANCHOR_BUTTON_TEXT};
`;
