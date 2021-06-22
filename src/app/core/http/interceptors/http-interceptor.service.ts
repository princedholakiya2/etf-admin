import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CustomErrorHandler} from '../../helpers/custom-error-handler.service';
import {CustomLocalStorage} from '../../helpers/localStorage';
import {environment} from '../../../../environments/environment';

interface RequestHeader {
  key: string;
  value: string;
}

@Injectable()
export  class HttpInterceptorService implements HttpInterceptor {

  constructor(public errorHandler: CustomErrorHandler) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('called');
    const requestHeaders: RequestHeader[] = [{
      key : environment.BearerTokenKey,
      value: CustomLocalStorage.getAuthToken()
    }];
    request = this.addRequestHeader(request, requestHeaders);

    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse) => this.errorHandler.handleError(error))
    );
  }

  addRequestHeader(request: HttpRequest<any> , requestHeaders: RequestHeader[]): HttpRequest<any>{
    let headers: HttpHeaders = request.headers;
    requestHeaders.forEach(requestHeader => headers = headers.append(requestHeader.key, requestHeader.value));
    return  request.clone({headers});
  }
}
