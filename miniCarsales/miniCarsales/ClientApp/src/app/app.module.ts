import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCar } from './addCar/addcar.component';
import { Listings } from './listings/listings.component';

import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCar,
    Listings,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'AddCar', component: AddCar },
      { path: 'Listings', component: Listings },
    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
