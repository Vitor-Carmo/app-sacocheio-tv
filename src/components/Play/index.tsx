import React from "react";
import { Svg, Path } from "react-native-svg";

type PlayProps = {
  size?: number;
  playColor?: string;
  backgroundColor?: string;
};

export default function Play({
  size = 24,
  playColor = "#202020",
  backgroundColor = "#ffffff",
}: PlayProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
        fill={playColor}
      />
      <Path
        d="M12 0C8.81737 0 5.76519 1.26428 3.51477 3.51477C1.26428 5.7651 0 8.81745 0 12C0 15.1825 1.26428 18.2348 3.51477 20.4852C5.7651 22.7357 8.81745 24 12 24C15.1825 24 18.2348 22.7357 20.4852 20.4852C22.7357 18.2349 24 15.1825 24 12C24 8.81745 22.7357 5.76519 20.4852 3.51477C18.2349 1.26428 15.1825 0 12 0ZM9.00002 16.9996V6.99981L18 12.1456L9.00002 16.9996Z"
        fill={backgroundColor}
      />
    </Svg>
  );
}
