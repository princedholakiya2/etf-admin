import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { catchError} from 'rxjs/operators';
import {UserModel} from '../_models/user.model';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthHTTPService} from './auth-http/auth-http.service';
import {CustomLocalStorage} from '../../../core/helpers/localStorage';
import {IAuthLogin, ILoginHttp, IUser} from './auth-http/models/auth.models';
import {BaseHttpService} from '../../../core/http/base-http.service';
import {IBaseResponse} from '../../../core/models/base.models';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isLoading$: Observable<boolean>;
    currentUserSubject: BehaviorSubject<UserModel>;

    basUrl = 'admin/profile';

    constructor( private authHttpService: AuthHTTPService, private router: Router, private http: BaseHttpService) {}

    login(credentials: IAuthLogin): Observable<ILoginHttp> {
        return this.authHttpService.login(credentials);
    }

    logout() {
        CustomLocalStorage.clearLocalStorage();
        this.router.navigate(['/auth/login']);
    }

    getLoginUserDetails(): Observable<IBaseResponse<IUser>>{
        return  this.http.get<IBaseResponse<IUser>>(this.basUrl);
    }

    forgotPassword(email: string): Observable<boolean> {
        return this.authHttpService.forgotPassword(email);
    }
}
