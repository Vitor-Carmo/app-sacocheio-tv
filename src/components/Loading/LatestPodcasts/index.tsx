import React from "react";

import FeaturedPodcast from "../../Loading/FeaturedPodcast";
import AnchorButton from "../../AnchorButton";

import { Title, Subtitle } from "../../../styles/global";
import {
  Container,
  Header,
  Content,
  ScrollHorizontal,
} from "../../LatestPodcasts/styles";

export default function LatestPodcasts() {
  return (
    <Container>
      <Header>
        <Content>
          <Title>Últimos Episódios</Title>
          <Subtitle>
            Os últimos episódios postados de cada programa da saco cheio tv.
          </Subtitle>
        </Content>
        <AnchorButton>Veja todos</AnchorButton>
      </Header>
      <ScrollHorizontal>
        <FeaturedPodcast />
        <FeaturedPodcast />
        <FeaturedPodcast marginRight="30px" />
      </ScrollHorizontal>
    </Container>
  );
}
