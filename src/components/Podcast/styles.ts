import styled from "styled-components/native";

type IContainerProps = {
  isLastPodcast?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<IContainerProps>`
  flex: 1;
  padding: 15px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  border-bottom-width: ${({ isLastPodcast }) =>
    isLastPodcast ? "0px" : "1px"};
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const AvatarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  overflow: hidden;
`;

export const Description = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_80};
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: -7.5px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 7.5px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 0;
`;
