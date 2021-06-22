import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {CustomTableModule} from '../../shared/components/custom-table/custom-table.module';
import {UsersRoutingModule} from './users-routing.module';

@NgModule({
  declarations: [UsersComponent],
    imports: [
        CommonModule,
        CustomTableModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
