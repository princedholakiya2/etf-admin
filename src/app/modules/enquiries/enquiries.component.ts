import {Component, OnInit} from '@angular/core';
import {columnsTypes, ICustomTableColumnsSchema} from '../../shared/models/customTable.model';
import {EnquiriesService} from './services/enquiries.service';

@Component({
  selector: 'app-enquiries-page',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {

  enquiriesColumns: ICustomTableColumnsSchema[] = [
    {
      columnId : 'firstName',
      columnParentId: 'studentInformation',
      columnType: columnsTypes.text,
      columnInnerId : 'firstName',
      label: ['firstName']
    },
    {
      columnId: 'middleName',
      columnParentId: 'studentInformation',
      columnType: columnsTypes.text,
      columnInnerId: 'middleName',
      label: ['middleName']
    },
    {
      columnId: 'lastName',
      columnParentId: 'studentInformation',
      columnType: columnsTypes.text,
      columnInnerId: 'lastName',
      label: ['lastName']
    },
  ];

  apiCallFunction: any;
  constructor(private enquiriesService: EnquiriesService) { }

  ngOnInit(): void {
    this.apiCallFunction = this.enquiriesService.getEnquiries.bind(this.enquiriesService);
  }

}
