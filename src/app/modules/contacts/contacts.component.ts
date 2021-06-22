import {Component, OnInit} from '@angular/core';
import {columnsTypes, ICustomTableColumnsSchema} from '../../shared/models/customTable.model';
import {ContactsService} from './services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsColumns: ICustomTableColumnsSchema[] = [
    {
      columnId: 'name',
      label: ['Name'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'email',
      label: ['Email'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'contact_no',
      label: ['Contact No'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'subject',
      label: ['Subject'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'message',
      label: ['Message'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'address',
      label: ['address'],
      columnType: columnsTypes.text
    },
  ];
  apiCallFunction: any;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.apiCallFunction = this.contactsService.getContactsList.bind(this.contactsService);
  }

}
