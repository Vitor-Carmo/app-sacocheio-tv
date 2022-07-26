import React from "react";
import { Anchors, LatestPodcasts, Container } from "../../components";
import { Title, Subtitle } from "../../styles/global";
import { greetings } from "../../helpers";

export default function Home() {
  return (
    <Container>
      <Title>{greetings()}, Jegue! 🐯🏹</Title>
      <Subtitle marginBottom="30px">Tudo chupeta, xuxu?</Subtitle>

      <Anchors />

      <LatestPodcasts />
    </Container>
  );
}
