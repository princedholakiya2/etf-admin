import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'enquiries',
        loadChildren: () => import('.././modules/enquiries/enquiries.module').then((m) => m.EnquiriesModule)
      },
      {
        path: 'category',
        loadChildren: () => import('.././modules/category/category.module').then((m) => m.CategoryModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('.././modules/contacts/contacts.module').then((m) => m.ContactsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('.././modules/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'subCategory',
        loadChildren: () => import('.././modules/sub-category/sub-category.module').then((m) => m.SubCategoryModule)
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
