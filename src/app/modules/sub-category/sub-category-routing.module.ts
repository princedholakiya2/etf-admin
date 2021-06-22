import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubCategoryActionComponent} from './components/sub-category-action/sub-category-action.component';

const routes: Routes = [
  {
    path : '',
    component: SubCategoryActionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCategoryRoutingModule { }
