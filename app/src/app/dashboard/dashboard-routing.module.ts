import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { StatsComponent } from './stats/stats.component';
import { ProductComponent } from './product/product.component';
import { dashboardAuthGuard } from './guard/dashboard-auth.guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:"",component:DashComponent,children:
  [
 {path:"",component:StatsComponent},
 {path:"product",component:ProductComponent}
  ]},
  {path:"auth",component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
