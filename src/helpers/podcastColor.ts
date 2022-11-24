export default function podcastColor(podcastId: number) {
  const PODCASTS_ID = {
    TARJA_PRETA_FM: 5849,
    DESINFORMACAO: 4,
    PODCAST_SACO_CHEIO: 1,
    CAGANDO_ANDANDO: 3,
    ELEICOES_22: 13394,
    CRYPTO_TIGERS: 5470,
    A_DERIVA: 4100,
    FEAT_BEATRIZ: 4099,
    NOTAS_SOBRE_NOTAS: 11977,
    ACERVO_PODCAST_SACO_CHEIO: 3962,
    COPA_DO_MUNDO_2022: 13918,
  };

  switch (podcastId) {
    case PODCASTS_ID.TARJA_PRETA_FM:
      return "#482853";
    case PODCASTS_ID.DESINFORMACAO:
      return "#ffc739";
    case PODCASTS_ID.PODCAST_SACO_CHEIO:
      return "#739f46";
    case PODCASTS_ID.CAGANDO_ANDANDO:
      return "#cb1f1f";
    case PODCASTS_ID.ELEICOES_22:
      return "#02478f";
    case PODCASTS_ID.CRYPTO_TIGERS:
      return "#d6d6d6";
    case PODCASTS_ID.A_DERIVA:
      return "#69673e";
    case PODCASTS_ID.FEAT_BEATRIZ:
      return "#3d051c";
    case PODCASTS_ID.NOTAS_SOBRE_NOTAS:
      return "#e0d8c7";
    case PODCASTS_ID.ACERVO_PODCAST_SACO_CHEIO:
      return "#ffc739";
    case PODCASTS_ID.COPA_DO_MUNDO_2022:
      return "#8e0e33";
    default:
      return "#9B9F46";
  }
}
