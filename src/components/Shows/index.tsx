import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components/native";

import AnchorButton from "../AnchorButton";
import { LoadingShows } from "../Loading";
import { IShow } from "../../interfaces";

import { Title, Subtitle } from "../../styles/global";

import {
  Container,
  ShowContainer,
  Place,
  ShowTextContent,
  Date,
  Time,
} from "./styles";
import api from "../../services/api";

export default function Shows() {
  const { COLORS } = useTheme();
  const [shows, setShows] = useState<IShow[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFetchShows = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        } = await api.get("/shows/get");
        setShows(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchShows();
  }, []);

  return (
    <Container>
      <Title marginBottom="5px">Arthur Petry agenda</Title>
      <Subtitle marginBottom="10px">
        Venha ver os próximos shows medíocres do Arthur Petry tentando copiar o
        estilo de gênios da comédia como
        <Subtitle color={COLORS.PRIMARY}> Bill Hicks</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Patrice O'neal</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Doug Stanhope</Subtitle>,
        <Subtitle color={COLORS.PRIMARY}> Kaio D{'\u2019'}elaqua</Subtitle> e
        <Subtitle color={COLORS.PRIMARY}> Bruna Louise</Subtitle>
      </Subtitle>
      <AnchorButton width="120px" marginBottom="30px">
        agenda completa
      </AnchorButton>
      {!isLoading ? (
        <>
          {shows.map((show, index) => (
            <ShowContainer
              key={index}
              lastShowItem={index === shows.length - 1}
            >
              <Place>{show.place}</Place>
              <ShowTextContent>
                <Date>{show.date}</Date> <Time>{show.hour}</Time>
              </ShowTextContent>
            </ShowContainer>
          ))}
        </>
      ) : (
        <LoadingShows />
      )}
    </Container>
  );
}
