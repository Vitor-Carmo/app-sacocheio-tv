import React from "react";
import { View } from "react-native";
import { Container, Podcast } from "../../components";
import { Title, Subtitle } from "../../styles/global";

import {
  Head,
  HeadContent,
  Avatar,
  Description,
  ProgramContainer,
  FilterContainer,
  FilterButton,
  FilterButtonTitle,
} from "./styles";

export default function Program() {
  return (
    <Container>
      <ProgramContainer>
        <Head>
          <Avatar
            source={{
              uri: "https://www.sacocheio.tv/static/media/1-banner.7320bd94.jpg",
            }}
          />
          <HeadContent>
            <Title marginBottom="15px">Podcast Saco Cheio</Title>
            <Subtitle> Arthur Petry</Subtitle>
          </HeadContent>
        </Head>

        <Description>
          O programa é para ouvintes que não procuram cultura, informação ou
          opiniões inteligentes. Durante uma hora e meia Arthur Petry reduz o
          mundo inteiro ao seu próprio umbigo, interpretando tudo de forma
          egoísta, ignorante e burra. Se você acha que existe certo e errado,
          tem convicções e opiniões sobre tudo, não dê play. O QI máximo para
          poder aproveitar esse podcast é 30.
        </Description>
      </ProgramContainer>

      <FilterContainer>
        <Title fontSize="18px">Todos episódios</Title>
        <FilterButton>
          <FilterButtonTitle>Filtrar</FilterButtonTitle>
        </FilterButton>
      </FilterContainer>

      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
    </Container>
  );
}
