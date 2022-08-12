import React from "react";
import { Svg, Path } from "react-native-svg";

type OptionsProps = {
  size?: number;
  borderColor?: string;
};

export default function Options({
  size = 3,
  borderColor = "#9E9E9E",
}: OptionsProps) {
  return (
    <Svg width={size} height={size * 4.67} viewBox="0 0 3 14" fill="none">
      <Path
        d="M1.5 11.2C2.33 11.2 3 11.8253 3 12.6C3 13.3747 2.33 14 1.5 14C0.67 14 0 13.3747 0 12.6C0 11.8253 0.67 11.2 1.5 11.2ZM0 7C0 7.77467 0.67 8.4 1.5 8.4C2.33 8.4 3 7.77467 3 7C3 6.22533 2.33 5.6 1.5 5.6C0.67 5.6 0 6.22533 0 7ZM0 1.4C0 2.17467 0.67 2.8 1.5 2.8C2.33 2.8 3 2.17467 3 1.4C3 0.625333 2.33 0 1.5 0C0.67 0 0 0.625333 0 1.4Z"
        fill={borderColor}
      />
    </Svg>
  );
}
