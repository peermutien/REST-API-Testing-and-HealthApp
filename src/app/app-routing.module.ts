import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import { HealthDynamicComponent } from './health-dynamic/health-dynamic.component';

const routes: Routes = [

  {
    path:'',component:ApiTestingComponent
  },
  {
    path:'health-status' ,component:HealthStatusComponent
  },
  {
    path:'health-dynamic',component:HealthDynamicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
