import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnquiriesComponent} from './enquiries.component';
import {EnquiriesRoutingModule} from './enquiries-routing.module';
import {CustomTableModule} from '../../shared/components/custom-table/custom-table.module';


@NgModule({
    declarations: [EnquiriesComponent],
    imports: [
        CommonModule,
        EnquiriesRoutingModule,
        CustomTableModule
    ]
})
export class EnquiriesModule {
}
