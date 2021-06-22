import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SubCategoryForm} from '../../../modules/sub-category/models/subCategory.mdels';

@Component({
    selector: 'app-sub-category-form-handler',
    templateUrl: './sub-category-form-handler.component.html',
    styleUrls: ['./sub-category-form-handler.component.scss']
})
export class SubCategoryFormHandlerComponent implements OnInit {

    @Input() formGroup: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    get formControlArray(): FormArray {
        return this.formGroup.get('children') as FormArray;
    }

    formControlGroup(index: number): FormGroup {
        return this.formControlArray.controls[index] as FormGroup;
    }

    addChild(): void {
        this.formControlArray.push(this.fb.group(SubCategoryForm.generateInnerChild()));
    }

    removeChild(i: number): void {
        this.formControlArray.removeAt(i);
    }


}
