import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/profile/login',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    // canLoad:[AuthGuard],
    // canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard]
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
