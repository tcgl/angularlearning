import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';

import { DashboardSectionComponent } from './dashboard-section.Component';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './dashboard-users.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details.component';
import { UserLoginService } from '../shared/services/user-login.service';
import { TestComponent } from '../dashboard/test.component';

@NgModule({
  imports: [ CommonModule, 
              DashboardRouting ],
  declarations: [ 
          DashboardSectionComponent, 
          DashboardComponent,   
          DashboardUsersComponent, 
          DashboardUserDetailsComponent, 
          TestComponent  
          ],
  providers:[ UserLoginService ],  
})
export class DashboardAppModule {}