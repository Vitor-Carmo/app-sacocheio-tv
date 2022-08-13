import React from "react";
import { Svg, Path } from "react-native-svg";

type CloseProps = {
  size?: number;
  color?: string;
};

export default function Close({ size = 21, color = "#9E9E9E" }: CloseProps) {
  return (
    <>
      <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
        <Path
          d="M18.0312 1.06068C18.617 0.474892 19.5668 0.474891 20.1526 1.06068C20.7383 1.64646 20.7383 2.59621 20.1526 3.182L3.182 20.1526C2.59621 20.7383 1.64646 20.7383 1.06068 20.1526C0.474891 19.5668 0.474891 18.617 1.06068 18.0312L18.0312 1.06068Z"
          fill={color}
        />
        <Path
          d="M1.10036 3.42896C0.514578 2.84317 0.514578 1.89343 1.10036 1.30764C1.68615 0.721854 2.6359 0.721854 3.22168 1.30764L20.1922 18.2782C20.778 18.864 20.778 19.8137 20.1922 20.3995C19.6065 20.9853 18.6567 20.9853 18.0709 20.3995L1.10036 3.42896Z"
          fill={color}
        />
      </Svg>
    </>
  );
}
