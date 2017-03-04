import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSectionComponent } from './dashboard-section.Component';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './dashboard-users.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details.component';
import { TestComponent } from '../dashboard/test.component';

const DashboardRoutes: Routes = [
    { path: 'dashboard', component: DashboardSectionComponent,
        children:[
            { path: '', component: DashboardComponent },
            { path: 'userlist', component: DashboardUsersComponent,
                children: [ 
                            { path: '', component: TestComponent },
                            { path: ':userDetails', component: DashboardUserDetailsComponent }
                          ]           
            }
        ]
    }
]


export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
