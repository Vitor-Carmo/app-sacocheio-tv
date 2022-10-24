type GenericObject = { [key: string]: any };

interface BaseResponse {
  status: boolean;
  data: GenericObject;
}

export declare global {
  interface SignInResponse extends BaseResponse {
    data: IUser & {
      mensagem?: string;
      error?: string;
    };
  }

  interface ShowsResponse extends BaseResponse {
    data: IShow[];
  }

  interface LatestEpisodesResponse extends BaseResponse {
    data: ILatestEpisode[];
  }

  interface FavoritesEpisodeResponse extends BaseResponse {
    data: IFavoriteEpisode[];
  }

  interface ProgramsResponse extends BaseResponse {
    data: IProgram[];
  }

  interface ProgramResponse extends BaseResponse {
    data: IProgram;
  }
}
