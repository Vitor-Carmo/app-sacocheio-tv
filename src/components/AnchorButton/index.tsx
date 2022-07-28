import React from "react";
import { Container, Text } from "./styles";

interface ILatestPodcasts {
  children: React.ReactNode;
  onPress?: () => void;
  width?: string;
  marginBottom?: string;
}

export default function AnchorButton({ children, width, marginBottom, onPress }: ILatestPodcasts) {
  return (
    <Container width={width} marginBottom={marginBottom} onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}
