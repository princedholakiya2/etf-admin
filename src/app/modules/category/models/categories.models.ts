import {FormControl, Validators} from '@angular/forms';

export interface IHttpCategories {
    _id: string;
    name: string;
    description: string;
    created_by: string;
    updated_by: string;
    is_deleted: boolean;
    created_datetime: string;
    updated_datetime: string;
    __v: number;
}

export interface ICategories {
    name: string | FormControl;
    description: string | FormControl;
}

export class CategoryForm implements ICategories {

    name: string | FormControl;
    description: string | FormControl;

    static CreateForm(): CategoryForm {
        const form = new CategoryForm();
        form.name = new FormControl(null, Validators.required);
        form.description = new FormControl(null, Validators.required);
        return form;
    }

    static mapToForm(http: IHttpCategories): CategoryForm {
        const form = new CategoryForm();
        form.name = http.name;
        form.description = http.description;
        return form;
    }

}
