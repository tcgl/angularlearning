import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: `<div class="jumbotron text-center">              
              	<p>{{ message }}</p>
				  			<button (click)="reRerouteButton()"  class="btn btn-success">Test login</button>
    	     	</div>`
})

export class LoginComponent {
  message = 'This is the Login component!.';

  	constructor( private _router: Router){}

  reRerouteButton(){
	  this._router.navigate(['/home']);
  }
}
