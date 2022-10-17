export declare global {
  interface IPodcast {
    image: string;
    title: string;
    description: string;
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

  interface ILatestEpisode {
    nome: string;
    id: number;
    horario: string;
    url: string;
    apresentador: string;
    descricao: string;
    qtdEps: number;
    grupoUrl: string;
    rssFeedURl: string;
    latest_episode: IEpisode;
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

  interface IFavoriteEpisode {
    titulo: string;
    apresentador: string;
    qtdEps: number;
    email: string;
    descricao: string;
    id: number;
    episode: IEpisode;
  }
}
