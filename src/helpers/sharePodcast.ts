import Toast from "react-native-toast-message";
import { Share } from "react-native";
import { LINKS } from "../constants";

export default async function (
  titulo: string,
  podcastUrl: string,
  slug: string
) {
  try {
    await Share.share(
      {
        message: `${LINKS.SACOCHEIO_TV_SITE}/podcast/${podcastUrl}/${slug}`,
      },
      {
        dialogTitle: `Compartilhar - ${titulo}`,
      }
    );
    // TODO: find the type of this error
  } catch (error: any) {
    Toast.show({
      type: "error",
      text1: "Houve algum erro!",
      text2: error.message,
    });
  }
}
