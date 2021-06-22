import {Component, OnInit} from '@angular/core';
import {columnsTypes, ICustomTableColumnsSchema} from '../../shared/models/customTable.model';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  userColumns: ICustomTableColumnsSchema[] = [
    {
      columnId: 'first_name',
      label: ['First Name'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'last_name',
      label: ['Last Name'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'email',
      label: ['Email'],
      columnType: columnsTypes.text
    },
    {
      columnId: 'address',
      label: ['address'],
      columnType: columnsTypes.text
    },
  ];
  apiCallFunction: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.apiCallFunction = this.usersService.getUserList.bind(this.usersService);
  }

}
