import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {CategoryService} from '../services/category.service';
import {CategoryForm} from '../models/categories.models';
import {finalize, take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
    selector: 'app-category-action',
    templateUrl: './category-action.component.html',
    styleUrls: ['./category-action.component.scss']
})
export class CategoryActionComponent implements OnInit {

    isLoading = false;
    categoryId: string;
    editMode = false;
    categoryForm: FormGroup;
    @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

    constructor(private categoryService: CategoryService,
                private fb: FormBuilder,
                private matSnackBar: MatSnackBar,
                private activatedRoute: ActivatedRoute,
                private  router: Router,
                private cd: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.categoryForm = this.fb.group(CategoryForm.CreateForm());
        this.activatedRoute.params.pipe(take(1)).subscribe(params => {
            this.categoryId = params.id;
        });

        if (this.categoryId) {
            this.categoryService.getCategory(this.categoryId).pipe(take(1)).subscribe((response) => {
                this.editMode = true;
                const formModel = CategoryForm.mapToForm(response.data);
                this.categoryForm.patchValue(formModel);
                this.categoryForm.updateValueAndValidity();
            });
        }
    }

    get controls() {
        return this.categoryForm.controls;
    }

    categoryFormSubmit(): void {
        if (this.categoryForm.valid) {
            this.isLoading = true;
            if (this.categoryId) {
                this.categoryService.updateCategory(this.categoryForm.value as CategoryForm).pipe(take(1),
                    finalize(() => this.isLoading = false)).subscribe(() => {
                        this.matSnackBar.open('Category Updated', 'close');
                        this.router.navigateByUrl('/category');
                        },
                    error => { this.matSnackBar.open(error.message, 'close'); throwError(error); });
            } else {
                this.categoryService.createCategory(this.categoryForm.value as CategoryForm).pipe(take(1),
                    finalize(() => this.isLoading = false)).subscribe(() => {
                        this.matSnackBar.open('Category added', 'close');
                        this.formDirective.resetForm();
                    },
                    error => { this.matSnackBar.open(error.message, 'close'); throwError(error); });
            }
            console.log(this.isLoading);
            this.cd.detectChanges();
        } else {
            this.matSnackBar.open('Please Check Your Form', 'close');
        }
    }

}
