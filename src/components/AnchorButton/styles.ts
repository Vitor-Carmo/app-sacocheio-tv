import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ width?: string; marginBottom?: string }>`
  flex: 1;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.ANCHOR_BUTTON_BACKGROUND};
  width: ${({ width }) => width ?? "100%"};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
`;

export const Text = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 11px;
  color: ${({ theme }) => theme.COLORS.ANCHOR_BUTTON_TEXT};
  text-align: center;
`;
