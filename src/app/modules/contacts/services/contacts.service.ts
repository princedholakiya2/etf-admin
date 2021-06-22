import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/http/base-http.service';
import {GlobalEnums} from '../../../core/enums/global.enums';
import {Observable} from 'rxjs';
import {IBaseResponse, IPaginationAPIResponse} from '../../../core/models/base.models';
import {IContactHttp} from '../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: BaseHttpService) {}

  private endpoint = 'all_users';

  getContactsList(page = GlobalEnums.defaultPage, limit?: number, search?: string): Observable<IBaseResponse<IPaginationAPIResponse<IContactHttp>>> {
    return this.http.get<IBaseResponse<IPaginationAPIResponse<IContactHttp>>>(`${this.endpoint}/${page}`);
  }
}
