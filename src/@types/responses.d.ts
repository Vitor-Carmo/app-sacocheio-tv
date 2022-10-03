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

  interface ShowsResponse {
    data: IShow[];
  }
}
