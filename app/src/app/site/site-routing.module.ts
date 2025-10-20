import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChefsComponent } from './chefs/chefs.component';
import { BooktableComponent } from './booktable/booktable.component';
import { LoginComponent } from './Models/login/login.component';
import { SignupComponent } from './Models/signup/signup.component';

const routes: Routes = [
  {path:"",component:SiteComponent,children:[
    {path:"",component:LandingPageComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"chefs",component:ChefsComponent},
    {path:"booktable",component:BooktableComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
