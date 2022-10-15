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

  interface IEpisode {
    nome: string;
    id: number;
    horario: string;
    url: string;
    apresentador: string;
    descricao: string;
    qtdEps: number;
    grupoUrl: string;
    rssFeedURl: string;
    latest_episode: {
      titulo: string;
      data: string;
      descricao: string;
      id: number;
      thumbnail: string;
      slug: "00-tarja-preta-fm";
      isFavorite: boolean;
    };
  }
}
