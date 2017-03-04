//app.component.ts

import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  	template: `	<nav-top></nav-top>								
								<router-outlet></router-outlet>`
})
export class AppComponent {
  message = 'This is the app component.';
}
