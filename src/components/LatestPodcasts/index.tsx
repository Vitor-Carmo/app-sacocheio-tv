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
          <Title>Últimos Episódios</Title>
          <Subtitle>
            Os últimos episódios postados de cada programa da saco cheio tv.
          </Subtitle>
        </Content>
        <AnchorButton>Veja todos</AnchorButton>
      </Header>
      <ScrollHorizontal>
        <FeaturedPodcast
          podcastIcon="https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg"
          episodePhoto="https://images.uncyc.org/pt/b/b8/Petry.jpeg"
          podcastTitle="Podcast Saco cheio"
          episodeTitle="#152 - Licença Obesidade"
        />
        <FeaturedPodcast
          podcastIcon="https://yt3.ggpht.com/7eqj6ODh2Q53OUkAXufCr7zlryNYE2gr8K25p1MOTr1BHHFcriece4GjH_pOZVf6GbaYGBrJil0"
          episodePhoto="https://1.bp.blogspot.com/-y-bkSUXgpz4/XchnCYViiLI/AAAAAAAAEl8/-iP4gLwh9Akq0IfIRWkNfC9ytp1ELPp7wCLcBGAsYHQ/s1600/ra.jpg"
          podcastTitle="Cagando e andando"
          episodeTitle="CAGANDO E ANDANDO PODCAST #238"
        />

        <FeaturedPodcast
          podcastIcon="https://i.ytimg.com/vi/7eQ9-xMYQJU/maxresdefault.jpg"
          episodePhoto="https://instagram.fcgh4-1.fna.fbcdn.net/v/t51.2885-15/278643471_1314316875731604_6534343912257192518_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcgh4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=bXGZOl7YUo4AX-LGeEN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgxODA1NDU0Njk4NTI1NTU5MQ%3D%3D.2-ccb7-5&oh=00_AT-poRsBvoDip2n22o7ufweRzhP9kI8XAB8AiXZ-PqyoSg&oe=62E83A38&_nc_sid=30a2ef"
          podcastTitle="Podcast Saco cheio"
          episodeTitle="Dadaísmo cômico"
          marginRight="30px"
        />
      </ScrollHorizontal>
    </Container>
  );
}
