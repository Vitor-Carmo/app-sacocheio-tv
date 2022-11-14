import {
  createShimmerPlaceholder,
  ShimmerPlaceholderProps as RNShimmerPlaceholderProps,
} from "react-native-shimmer-placeholder";
import { useTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface ShimmerPlaceholderProps extends RNShimmerPlaceholderProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
}

export default function ShimmerPlaceholder({
  width = "100%",
  height = "auto",
  borderRadius = 0,
  marginBottom = 0,
  marginTop = 0,
  marginRight = 0,
  marginLeft = 0,
  ...props
}: ShimmerPlaceholderProps) {
  const {
    COLORS: { SHIMMER_DEFAULT_COLOR, STATUSBAR },
  } = useTheme();
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <ShimmerPlaceholder
      style={{
        width,
        borderRadius,
        height,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
      }}
      shimmerColors={[SHIMMER_DEFAULT_COLOR, STATUSBAR, SHIMMER_DEFAULT_COLOR]}
      {...props}
    />
  );
}
