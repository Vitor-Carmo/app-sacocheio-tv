import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { DIMENSIONS } from "../../constants";
import { Title } from "../../styles/global";

export const Container = styled(Animated.ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Head = styled.View`
  margin-top: 70px;
  margin-bottom: 30px;
  padding-top: ${DIMENSIONS.HEADER_HEIGHT / 2}px;
`;

export const Group = styled.View`
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
`;

export const Avatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  overflow: hidden;
  margin-bottom: 15px;
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
  margin-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
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
  display: flex;
  justify-content: center;
  align-items: center;
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

export const AnswerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const CommentOptionTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  height: 60px;
`;

export const CommentOptionContent = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const CommentOptionTitle = styled(Title)`
  font-family: "Poppins_400Regular";
  margin-left: 20px;
`;

Title;
