import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import {CustomLocalStorage} from './localStorage';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler {
  constructor(private router: Router, private matSnackBar: MatSnackBar) {}

  handleError(error: HttpErrorResponse){
    console.error(error);
    switch (error.status){
      // case 400:
      //   return throwError(error);
      case 401:
        CustomLocalStorage.clearLocalStorage();
        this.router.navigate(['/auth/login']);
        break;
      case 500:
        this.matSnackBar.open('please Report us');
        throwError(error);
      default:
        return throwError(error);
    }
  }
}
