import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubCategoryActionComponent} from './components/sub-category-action/sub-category-action.component';
import {SubCategoryRoutingModule} from './sub-category-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SubCategoryFormHandlerModule} from '../../shared/components/sub-category-form-handler/sub-category-form-handler.module';

@NgModule({
    declarations: [SubCategoryActionComponent],
    imports: [
        CommonModule,
        SubCategoryRoutingModule,
        ReactiveFormsModule,
        SubCategoryFormHandlerModule
    ]
})
export class SubCategoryModule {
}
