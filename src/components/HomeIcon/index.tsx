import React from "react";
import { Svg, Path } from "react-native-svg";

type HomeIconProps = {
  size?: number;
  color?: string;
  opacity?: number;
};

export default function HomeIcon({
  size = 20,
  color = "#ffffff",
  opacity = 1,
}: HomeIconProps) {
  return (
    <Svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 20 22"
      fill="none"
      style={{
        opacity,
      }}
    >
      <Path
        d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
