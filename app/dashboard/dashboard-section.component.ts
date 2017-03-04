import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-section',
  template: `<div class="jumbotron text-center">             
                <p>{{ message }}</p>
            </div>
            <dashboard-users></dashboard-users> `
})

export class DashboardSectionComponent {
  message = "Dashboard Section compoenent";
}// END - class export