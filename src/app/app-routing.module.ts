import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';


import {ProfileComponent} from '@pages/profile/profile.component';

import {DashboardComponent} from '@pages/dashboard/dashboard.component';


import {NonAuthGuard} from '@guards/non-auth.guard';


import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { DisplayDetailsComponent } from './display-details/display-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PrintComponent } from '@pages/print/print.component';
import { MenuSidebarComponent } from '@modules/main/menu-sidebar/menu-sidebar.component';
import { DisplayComponent } from './display/display.component';
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component';






const routes: Routes = [
    {
        path: '', pathMatch:"full",component:WelcomeComponent
    },
    {
        path:"login",
        component:UserLoginComponent
    },
    {
        path:'super',component:LoginSuperAdminComponent
    },
   

    {
        path: '',
        component: MainComponent,
        //canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
           
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
           
            {
                path: 'dashboard',
                component: DashboardComponent
            },
          
            {
                path:"display",component:DisplayComponent
            },
            {
                path:'print',component:PrintComponent
            }
           
            
           
            
         
            
          
          
           
            
           
           
            
          
          
        ]
    },

    
    

  
 
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
