import React from "react";
import {
  Anchors,
  LatestPodcasts,
  LikedEpisodes,
  Shows,
  OfficialPlaylist,
} from "../../components";
import { Title, Subtitle } from "../../styles/global";
import { greetings } from "../../helpers";

import {
  Container,
  Head,
  AnchorContainer,
  LatestPodcastsContainer,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <Title>{greetings()}, Jegue! 🐯🏹</Title>
        <Subtitle marginBottom="30px">Tudo chupeta, xuxu?</Subtitle>
      </Head>

      <AnchorContainer>
        <Anchors />
      </AnchorContainer>

      <LatestPodcastsContainer>
        <LatestPodcasts />
      </LatestPodcastsContainer>

      <LikedEpisodes />

      <Shows />

      <OfficialPlaylist />
    </Container>
  );
}
