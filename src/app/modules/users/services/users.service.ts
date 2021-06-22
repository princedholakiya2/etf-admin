import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/http/base-http.service';
import {GlobalEnums} from '../../../core/enums/global.enums';
import {Observable} from 'rxjs';
import {IBaseResponse, IPaginationAPIResponse} from '../../../core/models/base.models';
import {IUserHttp} from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: BaseHttpService) {}

  private endpoint = 'all_users';

  getUserList(page = GlobalEnums.defaultPage, limit?: number, search?: string): Observable<IBaseResponse<IPaginationAPIResponse<IUserHttp>>> {
    return this.http.get<IBaseResponse<IPaginationAPIResponse<IUserHttp>>>(`${this.endpoint}/${page}`);
  }
}
