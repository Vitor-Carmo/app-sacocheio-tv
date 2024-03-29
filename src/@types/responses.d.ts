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
    error?: string;
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

  interface PodcastResponse extends BaseResponse {
    data: IPodcast;
  }

  interface SetFavoriteToggleResponse extends BaseResponse {
    data: {
      result: boolean;
    };
  }

  interface SendCommentResponse extends BaseResponse {
    data: {
      result: boolean;
    };
  }

  interface RemoveCommentResponse extends BaseResponse {
    data: {
      result: boolean;
    };
  }

  interface CommentsResponse extends BaseResponse {
    data: {
      data: IComment[];
      length: number;
    };
  }

  interface GetTimeResponse extends BaseResponse {
    data: {
      minuto: number;
    };
  }
}
