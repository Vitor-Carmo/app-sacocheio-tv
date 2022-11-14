import React from "react";
import { Svg, Path } from "react-native-svg";

type LogoutProps = {
  size?: number;
  color?: string;
};

export default function Logout({ size = 17, color = "#ff0040" }: LogoutProps) {
  return (
    <Svg width={size} height={size * 1.06} viewBox="0 0 17 18">
      <Path
        d="M17 0V18H5V17H16V1H5V0H17ZM8.1 12.1L8.8 12.8L13.2 8.4L8.8 4L8.1 4.7L11.2 7.8H0V8.8H11.3L8.1 12.1Z"
        fill={color}
      />
    </Svg>
  );
}
