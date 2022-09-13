import { Injectable } from "@angular/core";
import { User } from "../types";

type Users = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const USERS: Users[] = [
  {
    id: 1,
    firstName: "Terence",
    lastName: "Kong",
    email: "test@email.com",
    password: "password",
  },
];

const DEFAULT_USER: User = {
  id: 0,
  firstName: "",
  lastName: "",
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User = DEFAULT_USER;
  users: Users[] = USERS;
  isAuthenticated: boolean = false;
  hasError: boolean = false;

  constructor() {}

  login(email: string, password: string): void {
    const user = this.users;
    if (user.length === 1) {
      this.user = {
        id: user[0].id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
      };
      this.isAuthenticated = true;
      this.hasError = false;
      console.log("logged in successfully");
    } else {
      this.hasError = true;
    }
  }

  logout(): void {
    this.user = DEFAULT_USER;
    this.isAuthenticated = false;
  }

  getUserInfo(): User {
    return this.user;
  }
}
