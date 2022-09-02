import React from "react";
import { Svg, Path } from "react-native-svg";

type DownloadProps = {
  size?: number | string;
  borderColor?: string;
  backgroundColor?: string;
  isDownloaded?: boolean;
};

export default function Download({
  size = 15,
  borderColor = "#9E9E9E",
  backgroundColor = "#FFC739",
  isDownloaded = false,
}: DownloadProps) {
  return (
    <>
      {!isDownloaded ? (
        <Svg width={size} height={size} viewBox="0 0 15 15" fill="#000">
          <Path
            d="M7.5 0C3.36198 0 0 3.36211 0 7.5C0 11.638 3.36212 15 7.5 15C11.638 15 15 11.6379 15 7.5C15 3.36198 11.6381 0 7.5 0ZM7.5 13.9655C3.93099 13.9655 1.03448 11.069 1.03448 7.5C1.03448 3.93099 3.93099 1.03448 7.5 1.03448C11.069 1.03448 13.9655 3.93099 13.9655 7.5C13.9655 11.069 11.069 13.9655 7.5 13.9655Z"
            fill={borderColor}
          />
          <Path
            d="M8.01731 9.31033V3.51723H6.98292V9.31033L4.21559 6.95684L3.54322 7.73274L7.50012 11.1206L11.457 7.73274L10.7846 6.95684L8.01731 9.31033Z"
            fill={borderColor}
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
          <Path
            d="M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z"
            fill="transparent"
          />
          <Path
            d="M23 11.5C23 5.17514 17.8249 0 11.5 0C5.17514 0 0 5.17514 0 11.5C0 17.8249 5.17514 23 11.5 23C17.8249 23 23 17.8249 23 11.5ZM11.5 17.365L5.36653 12.1517L6.86153 10.3882L10.3114 13.3782L10.3117 5.59653H12.6118V13.3782L16.0617 10.3882L17.5567 12.1517L11.5 17.365Z"
            fill={backgroundColor}
          />
        </Svg>
      )}
    </>
  );
}
