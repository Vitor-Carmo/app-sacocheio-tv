import React from "react";
import { useTheme } from "styled-components/native";
import AnchorButton from "../AnchorButton";

import { Title, Subtitle } from "../../styles/global";

import { Container, ShowContainer, Place, ShowTextContent, Date, Time } from "./styles";

export default function Shows() {
  const { COLORS } = useTheme();
  const shows = [
    {
      "place": "PONTA GROSSA",
      "date": "28 AGO",
      "hour": "20h"
    },
    {
      "place": "LONDRINABALANGANDÃ COMEDY BAR",
      "date": "27 AGO",
      "hour": "21h"
    },
    {
      "place": "MARINGÁMARINGÁ COMEDY",
      "date": "26 AGO",
      "hour": "21h"
    },
    {
      "place": "CAMPINASINTERIORANO COMEDY CLUB",
      "date": "12 AGO",
      "hour": "22h"
    },
    {
      "place": "SANTOS",
      "date": "07 AGO",
      "hour": "20h"
    },
  ];
  return (
    <Container>
      <Title marginBottom="5px">Arthur Petry agenda</Title>
      <Subtitle marginBottom="10px">
        Venha ver os próximos shows medíocres do Arthur Petry tentando copiar o estilo de gênios da comédia como
        <Subtitle color={COLORS.PRIMARY}> Bill Hicks</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Patrice O'neal</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Doug Stanhope</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Kaio D’elaqua</Subtitle> e
        <Subtitle color={COLORS.PRIMARY}> Bruna Louise</Subtitle>
      </Subtitle>
      <AnchorButton width="120px" marginBottom="30px">agenda completa</AnchorButton>
      {
        shows.map((show, index) => (
          <ShowContainer key={index} lastShowItem={
            index === shows.length - 1
          }>
            <Place>{show.place}</Place>
            <ShowTextContent>
              <Date>{show.date}</Date>{" "} <Time>{show.hour}</Time>
            </ShowTextContent>
          </ShowContainer>
        ))
      }
    </Container>
  );
}
