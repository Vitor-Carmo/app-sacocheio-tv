import Toast from "react-native-toast-message";
import api from "../services/api";
import { ERROS } from "../constants";

export default async function (episodeId: number) {
  try {
    const {
      data: {
        data: { result },
      },
    } = await api.post<SetFavoriteToggleResponse>(
      "/podcast/set_favorite_toggle",
      {
        episodeId: Number(episodeId),
      }
    );

    if (!result) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: ERROS.UNKNOWN_LIKE_ERROR,
      });
      return false;
    }
    return true;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: ERROS.UNKNOWN_ERROR,
    });
    console.error(error);
    return false;
  }
}
