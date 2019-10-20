import { Role } from "./role.model";



export class Account  {
    public id: number;
    public username: String;
    public password: String;
    public fullname: String;
    public email: String;
    public phone: String;
    public gender: String;
    public address: String;
    public status: String;
    public role : Role;
    public createdTime: String;
    public updatedTime: String;
}
