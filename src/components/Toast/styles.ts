import styled from "styled-components/native";

import {
  BaseToast as RNBaseToast,
  BaseToastProps as RNBaseToastProps,
  ErrorToast,
  ToastConfig,
  ToastProps,
} from "react-native-toast-message";

export type BaseToastProps = RNBaseToastProps & {
  color?: string;
};

export const BaseToast = styled(RNBaseToast)<BaseToastProps>`
  border-left-color:  ${({ color }) => color};
  background-color: ${({ theme }) => theme.COLORS.TOAST_BACKGROUND};
`;
