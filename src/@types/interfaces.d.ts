export declare global {
  interface IProgram {
    nome: string;
    titulo: string;
    id: number;
    horario: string;
    url: string;
    apresentador: string;
    descricao: string;
    qtdEps: number;
    grupoUrl?: string;
    rssFeedURl?: string;
  }

  interface IEpisode {
    titulo: string;
    data: string;
    descricao: string;
    id: number;
    thumbnail: string;
    slug: string;
    isFavorite: boolean;
    podcastName?: string;
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

  interface ILatestEpisode extends IPodcast {
    latest_episode: IEpisode;
  }

  interface IFavoriteEpisode extends IProgram {
    episode: IEpisode;
  }
}
