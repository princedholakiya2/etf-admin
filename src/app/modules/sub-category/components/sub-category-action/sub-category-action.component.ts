import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SubCategoryForm} from '../../models/subCategory.mdels';

@Component({
    selector: 'app-sub-category',
    templateUrl: './sub-category-action.component.html',
    styleUrls: ['./sub-category-action.component.scss']
})
export class SubCategoryActionComponent implements OnInit {

    subCategoryForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.subCategoryForm = this.fb.group(SubCategoryForm.generateOuterForm());
        console.log(this.subCategoryForm);
    }

    get childCategory(): FormGroup {
        return this.subCategoryForm.get('childCategory') as FormGroup;
    }

    get childFormArray(): FormArray {
        return this.childCategory.get('child') as FormArray;
    }

    subCategoryFormSubmit(): void {
        console.log(this.subCategoryForm.value);
    }

    addRootChild(): void {
        this.childFormArray.push(this.fb.group(SubCategoryForm.generateInnerChild()));
    }

    removeRoot(i: number): void {
        this.childFormArray.removeAt(i);
    }

    addChildSub(i: number): void {
        const tmpFormGroup = this.childFormArray.controls[i] as FormGroup;
        console.log(this.childFormArray.controls);
        (tmpFormGroup.get('children') as FormArray).push(this.fb.group(SubCategoryForm.generateInnerChild()));
    }

    getInnerChildFormArray(parentIndex: number): FormArray {
        return (this.childFormArray.controls[parentIndex] as FormGroup).get('children') as FormArray;
    }

    removeChildSub(parentIndex: number): void {
        return ((this.childFormArray.controls[parentIndex] as FormGroup).get('children') as FormArray).removeAt(parentIndex);
    }

    findFormGroup(rootIndex: number, childIndex: number): FormGroup{
        return this.getInnerChildFormArray(rootIndex).controls[childIndex] as FormGroup;
    }

}
