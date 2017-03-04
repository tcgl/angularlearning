import { Injectable } from '@angular/core';
import { UserType } from '../models/usertype';

const usersPromise: Promise<UserType[]> = Promise.resolve([
    { ID: 3, name: 'Bob',   userName: 'userBob',   password: 'pass3' },
    { ID: 4, name: 'Dave',  userName: 'userDave',  password: 'pass4' },
    { ID: 5, name: 'Ray',   userName: 'userRay',   password: 'pass5' },
    { ID: 6, name: 'Jen',   userName: 'userJen',   password: 'pass6' },
    { ID: 7, name: 'Robin', userName: 'userRobin', password: 'pass7' },
    { ID: 8, name: 'Renzo', userName: 'userRenzo', password: 'pass8' }
]);

@Injectable() 
export class UserLoginService{

    getUsersMethod(){
        return usersPromise;
    }

    getUserMethod(username){
    // return usersPromise.then(users => users.find(user => user.userName === username));
        let user = usersPromise.then(users => {
                return users.find(user => {
                    console.log(user);
                    return user.userName === username;
                });
        });
        return user;
    }

}
