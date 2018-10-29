import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyMassIndexCalcComponent } from './body-mass-index-calc/body-mass-index-calc.component';

const appRoutes : Routes = [
  { path: '', component: BodyMassIndexCalcComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyMassIndexCalcComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
