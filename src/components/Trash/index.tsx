import React from "react";
import { Svg, Path } from "react-native-svg";

type ShareProps = {
  size?: number;
  color?: string;
};

export default function Trash({ size = 20, color = "#9E9E9E" }: ShareProps) {
  return (
    <Svg width={size} height={size * 1.16} viewBox="0 0 386 448" fill="none">
      <Path
        d="M385.277 49.2813C385.277 63.4693 374.079 74.6667 359.892 74.6667H25.3853C11.1973 74.6667 0 63.4688 0 49.2813C0 35.0933 11.1979 23.896 25.3853 23.896H105.281V0H280.001V23.896H359.897C374.08 23.896 385.283 35.0939 385.283 49.2813H385.277ZM35.0907 89.5987H349.437V417.385C349.437 434.557 336 448 318.823 448H66.4493C49.2773 448 35.8347 434.563 35.8347 417.385V89.5987H35.0907ZM279.251 377.065C279.251 381.545 282.985 385.279 287.464 385.279C291.943 385.279 295.678 381.545 295.678 377.065V141.119C295.678 136.639 291.943 132.905 287.464 132.905C282.985 132.905 279.251 136.639 279.251 141.119V377.065ZM184.423 377.065C184.423 381.545 188.157 385.279 192.636 385.279C197.115 385.279 200.85 381.545 200.85 377.065V141.119C200.85 136.639 197.115 132.905 192.636 132.905C188.157 132.905 184.423 136.639 184.423 141.119V377.065ZM90.344 377.065C90.344 381.545 94.0784 385.279 98.5576 385.279C103.037 385.279 106.771 381.545 106.771 377.065V141.119C106.771 136.639 103.037 132.905 98.5576 132.905C94.0784 132.905 90.344 136.639 90.344 141.119V377.065Z"
        fill={color}
      />
    </Svg>
  );
}
