import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {


  private finalUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private static handleErrors(error: HttpErrorResponse){
    return throwError(error.error);
  }

  get<T>(endpoint: string, params = new HttpParams): Observable<T>{
      return this.http.get<T>(`${this.finalUrl}/${endpoint}`, {params}).pipe(catchError(BaseHttpService.handleErrors));
  }

  post<T>(endpoint: string, data: any): Observable<T>{
    return this.http.post<T>(`${this.finalUrl}/${endpoint}`, data).pipe(catchError(BaseHttpService.handleErrors));
  }

  put<T>(endpoint: string, data: any): Observable<T>{
    return this.http.put<T>(`${this.finalUrl}/${endpoint}`, data).pipe(catchError(BaseHttpService.handleErrors));
  }

  delete<T>(endpoint: string): Observable<T>{
    return this.http.delete<T>(`${this.finalUrl}/${endpoint}`).pipe(catchError(BaseHttpService.handleErrors));
  }
}
