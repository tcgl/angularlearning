import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from   './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { NavigationTopComponent } from './navigation/navigation-top.component';
import { DashboardSectionComponent } from './dashboard/dashboard-section.Component';

const appRoutes: Routes = [
    { path: '', component: DashboardSectionComponent }, 
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },   
    { path: 'menuTop', component: NavigationTopComponent },  
    { path: '**', component: HelpComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
