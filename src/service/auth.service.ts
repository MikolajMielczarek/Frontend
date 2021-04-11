import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface TokenDataDTO {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login = (email: string, password: string) => {
    const clientId = 'client';
    const clientSecret = 'my-secret-key';
    const securityEndpointToken = btoa(`${clientId}:${clientSecret}`);
    const formData: FormData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', email);
    formData.append('password', password);
    return this.http
      .post<TokenDataDTO>('/oauth/token', formData, {
        headers: {
          Authorization: `Basic ${securityEndpointToken}`,
        },
      })
      .pipe(tap(this.setSession));
  };

  private setSession = (authResult: TokenDataDTO) => {
    const expiresAt = moment().add(authResult.expires_in, 'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  };

  public logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  };

  public isLoggedIn = () => {
    return moment().isBefore(this.getExpiration());
  };

  public isLoggedOut = () => {
    return !this.isLoggedIn();
  };

  public getExpiration = () => {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  };
}
