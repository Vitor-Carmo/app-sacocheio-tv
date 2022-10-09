import React from "react";
import { Linking } from "react-native";

import { Title, Subtitle } from "../../styles/global";
import { Container, Playlist, Image, Content } from "./styles";
import { LINKS } from "../../constants";

export default function OfficialPlaylist() {
  const handleGoToPlaylist = () => {
    Linking.openURL(LINKS.SPOTIFY_PLAYLIST);
  };

  return (
    <Container>
      <Title marginBottom="15px">
        Playlist oficial da Rádio{"\n"}
        Saco Cheio 📻
      </Title>
      <Playlist onPress={handleGoToPlaylist}>
        <Image />
        <Content>
          <Title fontSize="14px" marginBottom="5px">
            🌈 Músicas que dão vontade de dar uma liberada
          </Title>
          <Subtitle>Envie sua sugestão pelo Instagram @radiosacocheio</Subtitle>
        </Content>
      </Playlist>
    </Container>
  );
}
