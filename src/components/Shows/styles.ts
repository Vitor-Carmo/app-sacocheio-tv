import styled from "styled-components/native";

export const Container = styled.View`
  padding: 30px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const ShowContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<{ lastShowItem?: boolean }>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ lastShowItem }) => (lastShowItem ? "0px" : "15px")};
  padding-bottom: ${({ lastShowItem }) => (lastShowItem ? "0px" : "15px")};
  border-bottom-width: ${({ lastShowItem }) => (lastShowItem ? "0px" : "1px")};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
  flex-wrap: wrap;
  align-items: center;
`;

export const Place = styled.Text`
  flex: 1;
  font-family: "Poppins_300Light";
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_80};
  margin-right: 10%;
`;

export const ShowTextContent = styled.Text``;

export const Date = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Time = styled.Text`
  font-family: "Poppins_300Light";
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
