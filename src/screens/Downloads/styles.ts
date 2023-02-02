import styled from "styled-components/native";
import DownloadIcon from "../../components/Download";

export const Container = styled.ScrollView`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.DIMENSIONS.MARGIN_BOTTOM_TO_TAB_BAR};
`;

export const NoDownloadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Download = styled(DownloadIcon)`
  margin-bottom: 20px;
`;
