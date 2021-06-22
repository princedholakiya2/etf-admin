import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

const fb = new FormBuilder();

export interface ISubCategory {
    categoryId?: string | FormControl;
    name?: string | FormControl;
    description?: string | FormControl;
    childCategory?: FormGroup;
    child?: FormArray;
    children?: FormArray;
}

export class SubCategoryForm implements ISubCategory {

    categoryId?: string | FormControl;
    name?: string | FormControl;
    description?: string | FormControl;
    childCategory?: FormGroup;
    child?: FormArray;
    children?: FormArray;

    static generateOuterForm(): SubCategoryForm {
        const form = new SubCategoryForm();
        form.categoryId = fb.control(null, Validators.required);
        form.childCategory = fb.group(SubCategoryForm.generateChildForm() , Validators.required);
        return form;
    }

    static generateChildForm(): SubCategoryForm {
        const childForm = new SubCategoryForm();
        childForm.child = fb.array([fb.group(SubCategoryForm.generateInnerChild())], Validators.required);
        return childForm;
    }

    static generateInnerChild(): SubCategoryForm {
        const childForm = new SubCategoryForm();
        childForm.name = fb.control(null, Validators.required);
        childForm.description = fb.control(null, Validators.required);
        childForm.children = fb.array([], Validators.required);
        return childForm;
    }

}
