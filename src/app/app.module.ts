import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent }  from './pages/home/home';
import { WorkComponent }  from './pages/work/work';

import { routing,
         appRoutingProviders }  from './routes/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers:  [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
