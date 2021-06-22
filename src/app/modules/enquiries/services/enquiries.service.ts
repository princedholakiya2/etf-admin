import { Injectable } from '@angular/core';
import {BaseHttpService} from '../../../core/http/base-http.service';
import {IEnquiries} from '../models/enquries.model';
import {Observable} from 'rxjs';
import {IBaseResponse, IPaginationAPIResponse} from '../../../core/models/base.models';
import {GlobalEnums} from '../../../core/enums/global.enums';

@Injectable({
  providedIn: 'root'
})
export class EnquiriesService {

  constructor(private http: BaseHttpService) {}

  getEnquiries(page= GlobalEnums.defaultPage, limit?: number, search?: string): Observable<IBaseResponse<IPaginationAPIResponse<IEnquiries>>>{
    return this.http.get<IBaseResponse<IPaginationAPIResponse<IEnquiries>>>(`/all_enquiry/${page}`);
  }
}
