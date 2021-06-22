import {Injectable} from '@angular/core';
import {IBaseResponse, IPaginationAPIResponse} from '../../../core/models/base.models';
import {CategoryForm, IHttpCategories} from '../models/categories.models';
import {Observable} from 'rxjs';
import {BaseHttpService} from '../../../core/http/base-http.service';
import {GlobalEnums} from '../../../core/enums/global.enums';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: BaseHttpService) {
    }

    private endpoint = 'admin/category';

    getCategoriesList(page = GlobalEnums.defaultPage, limit?: number, search?: string): Observable<IBaseResponse<IPaginationAPIResponse<IHttpCategories>>> {
        return this.http.get<IBaseResponse<IPaginationAPIResponse<IHttpCategories>>>(`${this.endpoint}/${page}`);
    }

    getCategory(categoryId: string): Observable<IBaseResponse<IHttpCategories>> {
        return this.http.get<IBaseResponse<IHttpCategories>>(`admin/category_detail/${categoryId}`);
    }

    createCategory(data: CategoryForm): Observable<any> {
        return this.http.post(this.endpoint, data);
    }

    updateCategory(data: CategoryForm): Observable<any> {
        return this.http.post(this.endpoint, data);
    }

    deleteCategory(categoryId: string): Observable<any> {
        return this.http.delete(`${this.endpoint}/${categoryId}`);
    }
}
