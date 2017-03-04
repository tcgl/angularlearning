import { Component } from '@angular/core';

@Component({
  selector: 'nav-top',
  template: `<header> 
                <nav class="navbar navbar-inverse"> 
      				<div class="container-fluid"> 
						<div class="navbar-header"> 
							<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"  class="navbar-brand">Dolphon App</a> 
						</div> 
						<ul class="nav navbar-nav"> 
							<li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" >Dashboard</a></li>							 
							<li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
							<li><a routerLink="/help" routerLinkActive="active">Help</a></li>  
						</ul> 
      				</div> 
     			 </nav> 
    		</header>`
})

export class NavigationTopComponent {
  message = 'Top navigation component!.';
}
