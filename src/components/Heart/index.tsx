import React from "react";
import { Svg, Path } from "react-native-svg";

type DownloadProps = {
  size?: number;
  borderColor?: string;
  backgroundColor?: string;
  isLiked?: boolean;
};

export default function Heart({
  size = 16,
  borderColor = "#9E9E9E",
  backgroundColor = "#FFC739",
  isLiked = false,
}: DownloadProps) {
  return (
    <>
      {!isLiked ? (
        <Svg width={size} height={size * 0.875} viewBox="0 0 16 14" fill="none">
          <Path
            d="M11.4285 1.07695C13.3194 1.07695 14.8571 2.52597 14.8571 4.3077C14.8571 9.1387 9.58785 12.04 7.99814 12.8057C6.40446 12.0426 1.14293 9.15645 1.14293 4.3077C1.14293 2.52595 2.68067 1.07695 4.57147 1.07695C5.55256 1.07695 6.48861 1.47752 7.14232 2.17645C7.35944 2.40848 7.672 2.54207 8 2.54207C8.328 2.54207 8.64058 2.40858 8.85768 2.17645C9.51142 1.47752 10.4474 1.07695 11.4285 1.07695ZM11.4285 0C10.0611 0 8.83767 0.56865 8 1.46512C7.16233 0.56865 5.9389 0 4.57147 0C2.04693 0 0 1.9288 0 4.30775C0 10.7692 8 14 8 14C8 14 16 10.7692 16 4.30775C16 1.92885 13.9531 0 11.4285 0V0Z"
            fill={borderColor}
          />
        </Svg>
      ) : (
        <Svg width={size} height={size * 0.875} viewBox="0 0 25 22" fill="none">
          <Path
            d="M17.5214 0.5C15.4249 0.5 13.5493 1.36628 12.265 2.73198C10.9807 1.36628 9.10508 0.5 7.00863 0.5C3.1382 0.5 0 3.43834 0 7.06244C0 16.9059 12.265 21.8276 12.265 21.8276C12.265 21.8276 24.53 16.9059 24.53 7.06244C24.53 3.43842 21.3919 0.5 17.5214 0.5Z"
            fill={backgroundColor}
          />
        </Svg>
      )}
    </>
  );
}
