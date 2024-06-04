import { User } from "../Models/User"

export class UserService{
    users: User[] = [
        new User('Steve Smith', 'Male', 'Montly', 'Active'),
        new User('Joel Smith', 'Female', 'Yearly', 'Inactive'),
        new User('Mark Smith', 'Male', 'Quarterly', 'Active')


    ];
    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status:string){
        let user = new User(name, gender, subType, status)
        this.users.push(user);
    }
}