import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyMassIndexCalcComponent } from './body-mass-index-calc/body-mass-index-calc.component';
import { CaloriesCalcComponent } from './calories-calc/calories-calc.component';

const appRoutes : Routes = [
  { path: '', redirectTo: '/bmi', pathMatch: 'full' },
  { path: 'bmi', component: BodyMassIndexCalcComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyMassIndexCalcComponent,
    CaloriesCalcComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
