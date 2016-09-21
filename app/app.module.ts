import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './pages/home/home';
import { WorkComponent }  from './pages/work/work';

import { routing,
         appRoutingProviders }  from './routes/routing';


@NgModule({
  imports:      [ BrowserModule,
                  routing],
  declarations: [
                  AppComponent,
                  HomeComponent,
                  WorkComponent
                ],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
