export declare global {
  interface IProgram {
    nome: string;
    titulo: string;
    id: number;
    horario: string;
    url: string;
    apresentador: string;
    email: string;
    descricao: string;
    qtdEps: number;
    grupoUrl?: string;
    rssFeedURl?: string;
    next?: boolean;
    episodes: IEpisode[];
  }

  interface IEpisode {
    id: number;
    titulo: string;
    title?: string;
    data: string;
    descricao: string;
    description?: string;
    thumbnail: string;
    slug: string;
    isFavorite: boolean;
    podcastName?: string;
    urlMp4?: string;
    urlMp3?: string;
    time?: string;
    audio?: string;
  }

  interface IShow {
    place: string;
    date: string;
    hour: string;
  }

  interface IUser {
    id: number;
    token: boolean | string;
    userName: string;
  }

  interface ILatestEpisode extends IProgram {
    latest_episode: IEpisode;
  }

  interface IFavoriteEpisode extends IProgram {
    episode: IEpisode;
  }

  interface IComment {
    cod: number;
    usuario: number;
    comentario: string;
    data: string;
    resposta: string;
    nome: string;
    respostas: IComment[];
  }

  interface IPodcast extends IProgram {
    episode: IEpisode;
    comments: {
      data: IComment[];
      length: number;
    };
  }
}
