export interface User {
  first: string;
  last: string;
}

export type UserInfo = {
  id: number;
  fakeToken: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
};
