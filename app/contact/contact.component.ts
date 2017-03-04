import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: `<div class="jumbotron text-center">										
			 	<p>{{ message }}</p>
			 </div>`
})

export class ContactComponent {
  message = 'This is the Contact component!.';
}
