import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent }  from '../pages/work/work';
import { HomeComponent } from '../pages/home/home';
// import { AppComponent } from '../app.component'

const appRoutes: Routes = [
  {path: "work", component: WorkComponent},
  {path: "", component: HomeComponent}
]

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
