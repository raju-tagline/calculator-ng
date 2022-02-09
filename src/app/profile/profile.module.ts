import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const appChild : Routes = [
  {
    path:'login',
    component:LoginComponent 
  }
];
 
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
    // RouterModule.forChild(appChild)
  ]
})
export class ProfileModule { }
