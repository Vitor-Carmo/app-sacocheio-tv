import React from "react";
import { Container, Text } from "./styles";

interface ILatestPodcasts {
  children: React.ReactNode;
  onPress?: () => void;
}

export default function AnchorButton({ children, onPress }: ILatestPodcasts) {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}
