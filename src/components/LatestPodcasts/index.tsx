import React from "react";

import FeaturedPodcast from "../FeaturedPodcast";
import AnchorButton from "../AnchorButton";

import { Title, Subtitle } from "../../styles/global";
import { Container, Header, Content, ScrollHorizontal } from "./styles";

export default function LatestPodcasts() {
  return (
    <Container>
      <Header>
        <Content>
          <Title>Ultimos Episódios</Title>
          <Subtitle>
            Os últimos episódios postados de cada programa da saco cheio tv.
          </Subtitle>
        </Content>
        <AnchorButton>Veja todos</AnchorButton>
      </Header>
      <ScrollHorizontal>
        <FeaturedPodcast />
        <FeaturedPodcast />
        <FeaturedPodcast />
        <FeaturedPodcast marginRight="30px" />
      </ScrollHorizontal>
    </Container>
  );
}
