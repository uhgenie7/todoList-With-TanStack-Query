export interface IResponse {
  details: string;
}

export interface IAuthResponse {
  status: number;
  message: string;
  data: {
    details: string;
  };
}
