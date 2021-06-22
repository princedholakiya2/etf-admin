export interface IUserHttp {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    logo: string;
    user_role: number;
    account_status: number;
    is_deleted: boolean;
    created_by: string;
    updated_by: string;
    updated_datetime: string;
    __v: number;
    forgot_password_otp: number;
}
