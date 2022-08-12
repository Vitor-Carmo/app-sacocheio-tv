import React from "react";
import { Svg, Path } from "react-native-svg";

type PauseProps = {
  size?: number;
  playColor?: string;
  backgroundColor?: string;
};

export default function Pause({
  size = 24,
  playColor = "#202020",
  backgroundColor = "#ffffff",
}: PauseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
        fill={playColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.9853C0 5.35952 5.35951 0 11.9853 0C18.6111 0 24 5.35952 24 11.9853C24 18.6111 18.6111 24 11.9853 24C5.35951 24 0 18.6111 0 11.9853ZM8.03949 17.3742V6.62579H11.161V17.3742H8.03949ZM12.8396 17.3742V6.62579H15.961V17.3742H12.8396Z"
        fill={backgroundColor}
      />
    </Svg>
  );
}
