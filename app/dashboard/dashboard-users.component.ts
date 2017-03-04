import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../shared/services/user-login.service';
import { UserType } from '../shared/models/usertype';

@Component({
 	selector: 'dashboard-users',
  	template: `
		<div class="row">
			<div class="col-sm-4">
				<h2> left site panel - List</h2><br>
				<div *ngIf="userList" class="list-group">
					<a *ngFor="let user of userList"
						class="list-group-item"
						[routerLink]="['/dashboard/userlist', user.userName]" >
						{{user.name}}
					</a>
				</div>
			</div>
			<div class="col-sm-8">
				<h2> Right site panel - user Details</h2>
				 <router-outlet></router-outlet>				
			</div>
		</div>`
	})

export class DashboardUsersComponent implements OnInit {
	message = 'Dashboard User list component!.';
  	userList: UserType[];

	  constructor(private _userService: UserLoginService){  }

  	ngOnInit() { 
		  this._userService.getUsersMethod().then(data => this.userList = data);		
  	}
}