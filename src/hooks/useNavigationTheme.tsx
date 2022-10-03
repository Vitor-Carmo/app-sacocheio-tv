import { useTheme } from "styled-components/native";
import { DefaultTheme } from "@react-navigation/native";

export default function useNavigationTheme() {
  const { COLORS } = useTheme();

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.BACKGROUND,
      border: "transparent",
    },
  };
}
