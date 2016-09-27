import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent }  from './pages/home/home';
import { WorkComponent }  from './pages/work/work';
import { ProjectsComponent } from './pages/projects/projects';
import { RacesComponent } from './pages/races/races';

import { ProjectCardComponent } from './components/project-card/project.card';

import { routing,
         appRoutingProviders }  from './routes/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    RacesComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers:  [ appRoutingProviders],
  bootstrap: [AppComponent]
})


export class AppModule { }
