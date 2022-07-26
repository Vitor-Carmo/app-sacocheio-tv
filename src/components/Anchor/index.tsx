import React from "react";
import { Touchable, IconContainer, Content, Title } from "./styles";
import { SvgProps } from "react-native-svg";

interface IAnchorProps {
  Icon: React.FC<SvgProps>;
  title: string;
  onPress?: () => void;
  color: string;
}

export default function Anchor({ Icon, title, color, onPress }: IAnchorProps) {
  return (
    <Touchable color={color} onPress={onPress}>
      <IconContainer color={color}>
        <Icon />
      </IconContainer>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Touchable>
  );
}
