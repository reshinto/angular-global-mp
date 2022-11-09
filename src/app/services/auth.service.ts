import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserInfo } from "../types";
import { get_url, HTTP_OPTIONS, ROUTES, SERVICES } from "./constants";

const DEFAULT_USER: User = {
  first: "",
  last: "",
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User = DEFAULT_USER;
  token!: string;
  isAuthenticated: boolean = false;
  hasError: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    const body = {
      login: email,
      password,
    };
    //@ts-ignore
    const url = get_url(SERVICES.auth, ROUTES.auth.login);

    return this.http.post<{ token: string }>(url, body, HTTP_OPTIONS);
  }

  logout(): void {
    this.user = DEFAULT_USER;
    this.isAuthenticated = false;
  }

  getUserInfo(): Observable<UserInfo> {
    //@ts-ignore
    const url = get_url(SERVICES.auth, ROUTES.auth.userinfo);

    return this.http.post<UserInfo>(url, { token: this.token }, HTTP_OPTIONS);
  }
}
