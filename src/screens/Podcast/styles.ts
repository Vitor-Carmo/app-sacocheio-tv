import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  /*  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL}; */
  padding-top: 70px;
`;

export const Head = styled.View`
  margin-bottom: 30px;
`;

export const Group = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
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
  /*  flex-direction: row; */
  /* align-items: center; */
  justify-content: space-between;
`;

export const CommentHeader = styled.View`
  padding-bottom: 10px;
`;

export const CommentContainer = styled.View`
  width: 100%;
  bottom: 0;
  top: 0;
  flex-direction: row;
  align-items: center;

  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};

  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const MyAvatar = styled.Image<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

export const Comment = styled.TextInput`
  flex: 1;
  font-family: "Roboto_400Regular";
  font-size: 16px;
  padding: 20px 0;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
