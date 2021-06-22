import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category.component';
import {CategoryActionComponent} from './category-action/category-action.component';

const routes: Routes = [
  {
    path : '',
    component : CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryActionComponent
      },
      {
        path: 'edit/:id',
        component: CategoryActionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
