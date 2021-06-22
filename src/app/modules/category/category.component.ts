import {Component, OnInit} from '@angular/core';
import {CategoryService} from './services/category.service';
import {columnsTypes, ICustomTableColumnsSchema} from '../../shared/models/customTable.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    categoryColumns: ICustomTableColumnsSchema[] = [
        {
            columnId: 'name',
            label: ['Category Name'],
            columnType: columnsTypes.text
        },
        {
            columnId: 'description',
            label: ['Category Description'],
            columnType: columnsTypes.text
        },
        {
            columnId: 'update',
            label: ['Update'],
            columnType: columnsTypes.update,
            updateRedirectUrl: '/category/edit'
        },
        {
            columnId: 'delete',
            label: ['delete'],
            columnType: columnsTypes.delete,
        }
    ];
    apiCallFunction: any;
    deleteHandler: any;

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.apiCallFunction = this.categoryService.getCategoriesList.bind(this.categoryService);
        this.deleteHandler = this.categoryService.deleteCategory.bind(this.categoryService);
    }

}
