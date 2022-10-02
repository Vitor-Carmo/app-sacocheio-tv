import RNToast, { ToastConfig, ToastProps } from "react-native-toast-message";
import { useTheme } from "styled-components";

import { BaseToast, BaseToastProps } from "./styles";

export default function Toast(props: ToastProps) {
  const { COLORS } = useTheme();

  const BaseToastConfig = ({ color, ...props }: BaseToastProps) => (
    <BaseToast
      color={color}
      text2NumberOfLines={3}
      style={{
        paddingVertical: 10,
        height: "auto",
      }}
      text1Style={{
        fontFamily: "Poppins_600SemiBold",
        color: COLORS.TEXT,
        fontSize: 14,
        fontWeight: "600",
      }}
      text2Style={{
        fontFamily: "Roboto_400Regular",
        color: COLORS.TEXT_70,
        fontSize: 12,
        fontWeight: "400",
      }}
      {...props}
    />
  );

  const toastConfig: ToastConfig = {
    info: (props: BaseToastProps) => (
      <BaseToastConfig color="#055EEB" {...props} />
    ),
    error: (props: BaseToastProps) => (
      <BaseToastConfig color="#E50606" {...props} />
    ),
    success: (props: BaseToastProps) => (
      <BaseToastConfig color="#06E580" {...props} />
    ),
  };
  return <RNToast config={toastConfig} {...props} />;
}
