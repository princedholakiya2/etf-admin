import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubCategoryFormHandlerComponent} from './sub-category-form-handler.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SubCategoryFormHandlerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SubCategoryFormHandlerComponent
  ]
})
export class SubCategoryFormHandlerModule { }
