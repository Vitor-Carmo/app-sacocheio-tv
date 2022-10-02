type GenericObject = { [key: string]: any };

interface BaseResponse {
  status: boolean;
  data: GenericObject;
}

export declare global {
  interface SignInResponse extends BaseResponse {
    data: {
      mensagem?: string;
      token?: boolean | string;
      id?: number;
      userName?: string;
      error?: string;
    };
  }

  interface ShowsResponse {
    data: IShow[];
  }
}
