import React from "react";
import { Linking } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

import Anchor from "../Anchor";

import { ANCHORS } from "../../constants";

import Telegram from "../../assets/svg/telegram.svg";
import Pix from "../../assets/svg/pix.svg";
import Rss from "../../assets/svg/rss.svg";
import Youtube from "../../assets/svg/youtube.svg";

import { Container, Row } from "./styles";

const Anchors = () => {
  return (
    <Container>
      <Row marginBottom="8px">
        <Anchor
          title={"Grupo do telegróla "}
          onPress={() => Linking.openURL(ANCHORS.SACOCHEIO_TV_TELEGRAM.LINK)}
          Icon={Telegram}
          color={ANCHORS.SACOCHEIO_TV_TELEGRAM.COLOR}
        />

        <Anchor
          Icon={Pix}
          onPress={() => Clipboard.setString(ANCHORS.SACOCHEIO_TV_PIX.LINK)}
          title="Ajude a construir o novo estúdio"
          color={ANCHORS.SACOCHEIO_TV_PIX.COLOR}
        />
      </Row>

      <Row>
        <Anchor
          title="URL do feed RSS"
          onPress={() => Clipboard.setString(ANCHORS.SACOCHEIO_TV_RSS.LINK)}
          Icon={Rss}
          color={ANCHORS.SACOCHEIO_TV_RSS.COLOR}
        />

        <Anchor
          Icon={Youtube}
          onPress={() => Linking.openURL(ANCHORS.YOUTUBE_ARTHUR_PETRY.LINK)}
          title={"Canal do petróla no youtchube"}
          color={ANCHORS.YOUTUBE_ARTHUR_PETRY.COLORS}
        />
      </Row>
    </Container>
  );
}



export default Anchors;
