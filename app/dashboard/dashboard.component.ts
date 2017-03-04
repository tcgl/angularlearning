import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `{{message}}`
})

export class DashboardComponent {
  message = 'This is the Dashboard component!.';
}