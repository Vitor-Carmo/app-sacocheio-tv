import styled from "styled-components/native";
import { Description } from "../Program/styles";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  padding-top: 70px;
`;

export const Head = styled.View`
  margin-bottom: 30px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const PodcastActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const Comments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CommentHeader = styled.View`
  padding-bottom: 10px;
`;
