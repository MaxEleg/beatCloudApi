export interface WebAuth {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  artistName: string;
  rank: number;
  token: string;
  isAuth: boolean;
}

export interface AppState {
  auth: WebAuth;
}

export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  artistName: string;
  phone: string;
  birthDate? :any;
}
