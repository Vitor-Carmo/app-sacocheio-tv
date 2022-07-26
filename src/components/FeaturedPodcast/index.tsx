import React from "react";
import { TouchableOpacity, View, Touchable } from "react-native";
import { Title } from "../../styles/global";
import {
  Container,
  Episode,
  Info,
  Avatar,
  LinearGradient,
  Content,
} from "./styles";

interface IFeaturedPodcastProps {
  marginRight?: string;
}
export default function FeaturedPodcast({
  marginRight,
}: IFeaturedPodcastProps) {
  return (
    <Container marginRight={marginRight}>
      <Info>
        <Avatar
          source={{
            uri: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
          }}
        />
        <Title fontSize="10px">Podcast Saco cheio</Title>
      </Info>

      <Episode
        source={{
          uri: "https://images.uncyc.org/pt/b/b8/Petry.jpeg",
        }}
      >
        <Content>
          <LinearGradient>
            <Title fontSize="20px">#152 - Licença Obesidade</Title>
          </LinearGradient>
        </Content>
      </Episode>
    </Container>
  );
}
