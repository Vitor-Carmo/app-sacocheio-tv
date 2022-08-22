import React from "react";
import { Svg, Path } from "react-native-svg";

interface GoBackProps {
  size?: number;
  color?: string;
  style?: object;
}

export default function GoBack({
  size = 27,
  color = "#fff",
  style = {},
}: GoBackProps) {
  return (
    <Svg
      width={size}
      height={size * 0.814815}
      viewBox="0 0 27 22"
      fill="none"
      style={style}
    >
      <Path
        d="M0.454881 12.2902L9.15168 21.1714C9.74862 21.781 10.7149 21.781 11.2832 21.1714C11.8802 20.5618 11.8802 19.5751 11.2832 18.9947L5.17275 12.7256H25.4937C26.3178 12.7256 27 12.029 27 11.1874C27 10.3457 26.3178 9.64911 25.4937 9.64911H5.17275L11.2832 3.40907C11.8802 2.79947 11.8802 1.81272 11.2832 1.23231C10.999 0.941988 10.6011 0.767883 10.2032 0.767883C9.80532 0.767883 9.43578 0.913042 9.12315 1.23231L0.45478 10.0845C0.17049 10.3748 0 10.7811 0 11.1874C0 11.5937 0.170495 12.0001 0.45478 12.2903L0.454881 12.2902Z"
        fill={color}
      />
    </Svg>
  );
}
