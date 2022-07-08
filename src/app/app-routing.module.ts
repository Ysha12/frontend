import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import{LinkpageComponent} from './linkpage/linkpage.component';
import {AboutUsComponent}from './about-us/about-us.component'
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';

const routes: Routes = [

   {
        path:'', component:BodyComponent,
        children:[

          {
          path:'about-us', component:AboutUsComponent
          },


           ]
        },

 {path:'log-in', component:LogInComponent },
  {path:'forgot', component:ForgotComponent},
  {path:'register', component:RegisterComponent},
    {
    path:'header', component:HeaderComponent
    },
    {path:'cust-dashboard',
  component:CustDashboardComponent},

{
  path:'linkpage',
   component: LinkpageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
