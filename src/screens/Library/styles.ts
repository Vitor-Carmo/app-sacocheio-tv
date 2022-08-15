import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  margin-top: 45px;
  margin-bottom: 30px;
`;

export const HeadContent = styled.View`
  flex: 1;
`;

export const CountText = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_60};
  margin-bottom: 15px;
`;
export const Sections = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TouchableSection = styled.TouchableOpacity<{ selected?: boolean }>`
  padding: 5px 15px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SECONDARY : theme.COLORS.TEXT};
  background-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND};
  margin-right: 15px;
`;

export const TouchableSectionText = styled.Text<{ selected?: boolean }>`
  font-family: "Poppins_500Medium";
  font-size: 14px;
  color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SECONDARY : theme.COLORS.TEXT};
`;

export const FilterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.DIMENSIONS.PADDING_VERTICAL};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-bottom: 15px;
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 80px;
  height: 32px;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.FILTER_BUTTON_BACKGROUND};
`;

export const FilterButtonTitle = styled.Text`
  font-family: "Poppins_300Light";
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.FILTER_BUTTON_TITLE};
`;

export const PodcastListContent = styled.View`
  margin-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;
