import { Component } from '@angular/core';

@Component({
  selector: 'help',
  template: `<div class="jumbotron text-center">						   
								<p>{{ message }}</p>
							</div>`
})

export class HelpComponent {
  message = 'This is the Help component!.';
}