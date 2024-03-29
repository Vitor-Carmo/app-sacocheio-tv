import React from "react";
import { Svg, Path } from "react-native-svg";

type ArrowProps = {
  size?: number;
  color?: string;
  type?: "default" | "player";
  direction?: "left" | "right" | "top" | "bottom";
};

export default function Arrow({
  size = 8,
  color = "#ffffff",
  type = "default",
  direction = "left",
}: ArrowProps) {
  const directionStyle = () => {
    switch (direction) {
      case "bottom":
        return "270deg";
      case "right":
        return "180deg";
      case "top":
        return "90deg";
      default:
        return "0deg";
    }
  };

  switch (type) {
    case "player":
      return (
        <Svg
          width={size}
          height={size * 0.95625}
          viewBox="0 0 23 22"
          fill="none"
          style={{ transform: [{ rotate: directionStyle() }] }}
        >
          <Path
            d="M5.808 12.394L6.81176 10.6641L6.79954 10.6571L5.808 12.394ZM18.534 19.778L17.5303 21.5079L17.531 21.5083L18.534 19.778ZM18.534 2.224L19.5377 3.95389L19.538 3.95376L18.534 2.224ZM5.808 9.608L6.79957 11.345L6.81173 11.3379L5.808 9.608ZM4 3C4 1.89543 3.10457 1 2 1C0.895431 1 0 1.89543 0 3H4ZM0 19C0 20.1046 0.895431 21 2 21C3.10457 21 4 20.1046 4 19H0ZM4.80427 14.1239L17.5303 21.5079L19.5377 18.0481L6.81173 10.6641L4.80427 14.1239ZM17.531 21.5083C19.8828 22.8715 23 21.2577 23 18.384H19C19 18.3236 19.0191 18.2458 19.0629 18.1746C19.103 18.1093 19.1523 18.0677 19.1966 18.043C19.283 17.9947 19.4202 17.98 19.537 18.0477L17.531 21.5083ZM23 18.384V3.616H19V18.384H23ZM23 3.616C23 0.746445 19.8862 -0.873282 17.53 0.494244L19.538 3.95376C19.4227 4.02068 19.2848 4.00691 19.1969 3.95779C19.1523 3.93286 19.103 3.89108 19.0629 3.82584C19.0192 3.75471 19 3.67684 19 3.616H23ZM17.5303 0.494111L4.80427 7.87811L6.81173 11.3379L19.5377 3.95389L17.5303 0.494111ZM4.81646 7.87109C4.26446 8.18621 3.80561 8.64171 3.48646 9.19139L6.94568 11.1998C6.91061 11.2602 6.86019 11.3103 6.79954 11.3449L4.81646 7.87109ZM3.48646 9.19139C3.16732 9.74107 2.99921 10.3654 2.99921 11.001H6.99921C6.99921 11.0708 6.98074 11.1394 6.94568 11.1998L3.48646 9.19139ZM2.99921 11.001C2.99921 11.6366 3.16731 12.2609 3.48646 12.8106L6.94568 10.8022C6.98074 10.8626 6.99921 10.9312 6.99921 11.001H2.99921ZM3.48646 12.8106C3.80562 13.3603 4.26446 13.8158 4.81646 14.1309L6.79954 10.6571C6.86019 10.6917 6.91061 10.7418 6.94568 10.8022L3.48646 12.8106ZM0 3V19H4V3H0Z"
            fill={color}
          />
        </Svg>
      );

    default:
      return (
        <Svg
          width={size}
          height={size * 1.75}
          viewBox="0 0 8 14"
          fill="none"
          style={{ transform: [{ rotate: directionStyle() }] }}
        >
          <Path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill={color} />
        </Svg>
      );
  }
}
