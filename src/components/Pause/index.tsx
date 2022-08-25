import React from "react";
import { Svg, Path } from "react-native-svg";

type PauseProps = {
  size?: number;
  playColor?: string;
  backgroundColor?: string;
  outline?: boolean;
};

export default function Pause({
  size = 24,
  playColor = "#202020",
  backgroundColor = "#ffffff",
  outline = false,
}: PauseProps) {
  return (
    <>
      {!outline ? (
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
      ) : (
        <Svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <Path
            d="M18 0.5C13.3587 0.5 8.90756 2.34374 5.62571 5.62571C2.34374 8.90744 0.5 13.3588 0.5 18C0.5 22.6412 2.34374 27.0924 5.62571 30.3743C8.90744 33.6563 13.3588 35.5 18 35.5C22.6412 35.5 27.0924 33.6563 30.3743 30.3743C33.6563 27.0926 35.5 22.6412 35.5 18C35.5 13.3588 33.6563 8.90756 30.3743 5.62571C27.0926 2.34374 22.6412 0.5 18 0.5ZM18 33.5C14.0728 33.5 9.77685 31.7769 7 29C4.22315 26.2229 2.5 21.9268 2.5 18C2.5 14.0732 4.22315 9.77685 7 7C9.77711 4.22315 14.0732 2.5 18 2.5C21.9268 2.5 26.2231 4.22315 29 7C31.7769 9.77711 33.5 14.0732 33.5 18C33.5 21.9268 31.7769 26.2231 29 29C26.2229 31.7769 21.9268 33.5 18 33.5ZM16.6538 12V24H12.6155V12H16.6538ZM23.3844 11.9748V24H19.3461V11.9748H23.3844Z"
            fill={backgroundColor}
          />
        </Svg>
      )}
    </>
  );
}
