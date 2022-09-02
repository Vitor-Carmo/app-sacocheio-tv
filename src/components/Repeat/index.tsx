import React from "react";
import { Svg, Path } from "react-native-svg";

type RepeatProps = {
  size?: number;
  color?: string;
};

export default function Repeat({ size = 20, color = "#ffffff" }: RepeatProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.0015 11.2857L2.5 15.1429M2.5 15.1429L7.0015 19M2.5 15.1429L14.5 15.1429C15.6935 15.1429 16.8381 14.7365 17.682 14.0131C18.5259 13.2898 19 12.3087 19 11.2857V8.71429M12.9985 8.71429L17.5 4.85714M17.5 4.85714L12.9985 1M17.5 4.85714L5.5 4.85714C4.30653 4.85714 3.16193 5.26352 2.31802 5.98687C1.47411 6.71023 1 7.6913 1 8.71428V11.2857"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
