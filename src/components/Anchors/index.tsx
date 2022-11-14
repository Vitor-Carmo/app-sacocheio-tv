import React from "react";
import * as Linking from "expo-linking";
import Toast from "react-native-toast-message";
import * as Clipboard from "expo-clipboard";

import Anchor from "../Anchor";

import { ANCHORS } from "../../constants";

import Telegram from "../../assets/svg/telegram.svg";
import Pix from "../../assets/svg/pix.svg";
import Rss from "../../assets/svg/rss.svg";
import Youtube from "../../assets/svg/youtube.svg";

import { Container, Row } from "./styles";

const Anchors = () => {
  const handleCopyValue = async (value: string): Promise<void> => {
    Toast.hide();

    await Clipboard.setStringAsync(value);

    Toast.show({
      type: "info",
      text1: "Copiado com sucesso!",
      text2: value,
    });
  };

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
          onPress={() => handleCopyValue(ANCHORS.SACOCHEIO_TV_PIX.LINK)}
          title="Ajude a construir o novo estúdio"
          color={ANCHORS.SACOCHEIO_TV_PIX.COLOR}
        />
      </Row>

      <Row>
        <Anchor
          title="URL do feed RSS"
          onPress={() => handleCopyValue(ANCHORS.SACOCHEIO_TV_RSS.LINK)}
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
};

export default Anchors;
