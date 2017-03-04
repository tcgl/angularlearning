import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `<div class="jumbotron text-center">             
                <p>{{ message }}</p>
            </div>`
})

export class HomeComponent {
  message = 'This is the Home component!.';
}