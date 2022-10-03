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
}
