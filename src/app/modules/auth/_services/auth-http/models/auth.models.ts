import {FormControl, Validators} from '@angular/forms';

export interface IAuthLogin{
    email: string | FormControl;
    password: string | FormControl;
}

export interface ILoginHttp{
    success: boolean;
    message: string;
    data: any;
    token: string;
}

export interface IUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    logo: string;
    user_role: number;
    account_status: number;
    is_deleted: boolean;
    created_by: string;
    updated_by: string;
    updated_datetime: string;
    __v: number;
}

export class AuthLoginForm implements  IAuthLogin{
    email = new FormControl('admin@gmail.com', [ Validators.required , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
    password = new FormControl('123', [Validators.required, Validators.minLength(3)]);
}
