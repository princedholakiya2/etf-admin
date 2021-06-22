import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {IAuthLogin, ILoginHttp} from './models/auth.models';

const API_USERS_URL = `${environment.apiUrl}/admin`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  private http: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  login(credentials: IAuthLogin): Observable<any> {
    return this.http.post<ILoginHttp>(`${API_USERS_URL}/login`, credentials);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {email});
  }

}
