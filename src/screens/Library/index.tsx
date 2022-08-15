import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Play, Podcast } from "../../components";
import { Title, Subtitle } from "../../styles/global";

import {
  Container,
  Head,
  HeadContent,
  CountText,
  Sections,
  TouchableSection,
  TouchableSectionText,
  FilterContainer,
  FilterButton,
  FilterButtonTitle,
  PodcastListContent,
} from "./styles";

export default function Library() {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Head>
        <HeadContent>
          <Title fontSize="22px">Sua biblioteca</Title>
          <CountText>58 episódios baixados</CountText>
          <Sections>
            <TouchableSection selected>
              <TouchableSectionText selected>Baixados</TouchableSectionText>
            </TouchableSection>
            <TouchableSection>
              <TouchableSectionText>Curtidos</TouchableSectionText>
            </TouchableSection>
          </Sections>
        </HeadContent>
        <TouchableOpacity>
          <Play size={50} backgroundColor={COLORS.PRIMARY} />
        </TouchableOpacity>
      </Head>
      <FilterContainer>
        <Title fontSize="16px">Todos episódios baixados</Title>
        <FilterButton>
          <FilterButtonTitle>Filtrar</FilterButtonTitle>
        </FilterButton>
      </FilterContainer>
      <PodcastListContent>
        <Podcast />
        <Podcast />
        <Podcast isLastPodcast />
      </PodcastListContent>
    </Container>
  );
}
