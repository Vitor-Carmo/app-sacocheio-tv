import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "styled-components";
import AnchorButton from "../AnchorButton";

import { Title, Subtitle } from "../../styles/global";

import { Container, Playlist, Image, Content } from "./styles";

export default function OfficialPlaylist() {

  return (
    <Container>
      <Title marginBottom="15px">
        Playlist oficial da Rádio{"\n"}
        Saco Cheio 📻
      </Title>
      <Playlist>
        <Image />
        <Content>
          <Title fontSize="14px" marginBottom="5px">
            🌈 Músicas que dão vontade de dar uma liberada
          </Title>
          <Subtitle>
            Envie sua sugestão pelo Instagram @radiosacocheio
          </Subtitle>
        </Content>
      </Playlist>
    </Container>
  );
}
