import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Store } from "@ngrx/store";
import { UserInfo } from "../types";
import { get_url, HTTP_OPTIONS, ROUTES, SERVICES } from "./constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  login(email: string, password: string): Observable<UserInfo> {
    const body = {
      login: email,
      password,
    };
    //@ts-ignore
    const url = get_url(SERVICES.auth, ROUTES.auth.login);

    return this.http.post<{ token: string }>(url, body, HTTP_OPTIONS).pipe(
      switchMap(({ token }) => {
        sessionStorage.setItem("token", token);
        return this.getUserInfo(token);
      }),
    );
  }

  getUserInfo(token: string): Observable<UserInfo> {
    //@ts-ignore
    const url = get_url(SERVICES.auth, ROUTES.auth.userinfo);

    return this.http.post<UserInfo>(url, { token }, HTTP_OPTIONS);
  }
}
