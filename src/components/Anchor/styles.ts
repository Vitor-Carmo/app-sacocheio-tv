import styled from "styled-components/native";

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{ color: string }>`
  width: 49%;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ color }) => color};
  align-items: center;
`;

export const IconContainer = styled.View<{ color: string }>`
  width: 45px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export const Icon = styled.Image`
  width: 22px;
`;

export const Content = styled.View`
  width: 73%;
  padding: 10px 8px;
`;

export const Title = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 10px;
  text-align: center;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
`;
