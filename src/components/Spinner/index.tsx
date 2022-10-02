import React, { useEffect } from "react";
import { SpinnerView } from "./styles";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";
interface SpinnerProps {
  size: number;
  color: string;
  borderWidth?: number;
}
export default function Spinner({
  size,
  color,
  borderWidth = 3,
}: SpinnerProps) {
  const rotatePosition = useSharedValue("0deg");

  const spinnerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotatePosition.value }],
    };
  });

  useEffect(() => {
    rotatePosition.value = withRepeat(
      withTiming("360deg", {
        duration: 500,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);
  return (
    <SpinnerView
      style={spinnerStyle}
      color={color}
      size={size}
      borderWidth={borderWidth}
    />
  );
}
