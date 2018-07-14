export interface Meal {
  _id: string;
  name: string;
  price: number;
  description: string;
}

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
  cart: Meal[];
  auth: WebAuth;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  mail: string;
  phone: string;
  password: string;
  birthDate: any;
}
