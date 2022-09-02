import RNToast, {
  ToastConfig,
  ToastProps,
} from "react-native-toast-message";
import { useTheme } from "styled-components";

import { BaseToast, BaseToastProps } from "./styles";

export default function Toast(props: ToastProps) {
  const { COLORS } = useTheme();

  const toastConfig: ToastConfig = {
    info: (props: BaseToastProps) => (
      <BaseToast
        color="#055EEB"
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
    ),
  };
  return <RNToast config={toastConfig} {...props} />;
}
