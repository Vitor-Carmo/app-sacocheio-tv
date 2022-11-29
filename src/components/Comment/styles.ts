import styled from "styled-components/native";
import { Title } from "../../styles/global";
import { DIMENSIONS } from "../../constants";

export const Answers = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 14px;
  color: #3ea6ff;
  margin-top: 15px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
`;

export const ProfileAvatar = styled.View<{ color: string; size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 0 16px;
  justify-content: center;
  height: 25px;
`;

export const Container = styled.View<{
  isLastComment?: boolean;
  paddingLeft?: string;
}>`
  flex-direction: row;
  padding: 16px 0;
  padding-left: ${({ theme, paddingLeft }) =>
    paddingLeft || theme.DIMENSIONS.PADDING_VERTICAL};
  padding-right: ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: ${({ isLastComment }) => (isLastComment ? "0" : "1px")};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;
