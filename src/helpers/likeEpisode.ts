import { SetStateAction } from "react";
import Toast from "react-native-toast-message";
import api from "../services/api";
import { ERROS } from "../constants";

export default async function (
  episodeId: number,
  podcastId: number,
  likeState: (value: SetStateAction<boolean>) => void
) {
  likeState((liked) => !liked);
  try {
    const {
      data: { data },
    } = await api.post<SetFavoriteToggleResponse>(
      "/podcast/set_favorite_toggle",
      {
        episodeId,
        podcastId,
      }
    );
    if (!data.result) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: ERROS.UNKNOWN_LIKE_ERROR,
      });
      likeState((liked) => !liked);
    }
    return true;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: ERROS.UNKNOWN_ERROR,
    });
    console.log(error);
    likeState((liked) => !liked);
  }
}
