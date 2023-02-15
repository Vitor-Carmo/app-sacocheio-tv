import React from "react";
import { useTheme } from "styled-components";

import { Title, Subtitle } from "../../styles/global";
import { Container } from "./styles";
import Modem from "../../assets/svg/modem.svg";

export default function NoWiFi() {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Modem fill={COLORS.TEXT_20} width={180} height={135.65} />
      <Title marginTop="15px" marginBottom="8px">
        Conecte-se à Internet
      </Title>
      <Subtitle fontSize="12px">
        Você está off-line. verifique sua conexão.
      </Subtitle>
    </Container>
  );
}
