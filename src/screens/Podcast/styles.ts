import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { HEADER_HEIGHT } from "../../constants";

export const Container = styled(Animated.ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-top: ${HEADER_HEIGHT / 2}px;
`;

export const Head = styled.View`
  margin-top: 70px;
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

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-right: 15px;
`;

export const Comments = styled.View`
  margin-bottom: 55px;
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

export const ProfileAvatar = styled.View<{ color: string; size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

export const CommentInput = styled.TextInput`
  flex: 1;
  font-family: "Roboto_400Regular";
  font-size: 16px;
  padding: 20px 0;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Comment = styled.View<{
  isLastComment?: boolean;
  paddingLeft?: string;
}>`
  flex-direction: row;
  padding: 10px 0;
  padding-left: ${({ theme, paddingLeft }) =>
    paddingLeft || theme.DIMENSIONS.PADDING_VERTICAL};
  padding-right: ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: ${({ isLastComment }) => (isLastComment ? "0" : "1px")};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const CommentContent = styled.View`
  flex: 1;
`;

export const Answers = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 14px;
  color: #3ea6ff;
  margin-top: 15px;
`;

export const AnswerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;
