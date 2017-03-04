import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserType } from '../shared/models/usertype';
import { UserLoginService } from '../shared/services/user-login.service';

@Component({
  selector: 'dashboard-userdetails',
  template: `{{message}}
              <div *ngIf="user"> {{user.userName}} </div>`
})

export class DashboardUserDetailsComponent {
    user: UserType;
    message = 'Dashboard user details component!.';
    constructor(private _route: ActivatedRoute, private _userService: UserLoginService){}

    ngOnInit() { 
        this._route.params.forEach(params => {
             let username = params['userDetails'];
             
            this._userService.getUserMethod(username).then(user => {
                this.user = user            
            });
        });
    }//END ngOnInit

}// END classgu