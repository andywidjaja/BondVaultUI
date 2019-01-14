import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppComponent } from './app.component';
import { BondsComponent } from './bonds/bonds.component';
import { BondService } from './services/bond.service';
import { BondDetailComponent } from './bonds/bond-detail.component';
import { HomeComponent } from './home/home.component';
import { BondDetailGuard } from './bonds/bond-detail.guard';
import { BondData } from './bonds/bond-data';

@NgModule({
  declarations: [
    AppComponent,
    BondsComponent,
    BondDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BondData, {passThruUnknownUrl: true}),
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    RouterModule.forRoot([
      { path: 'bonds', component: BondsComponent },
      { path: 'bonds/:id', canActivate: [ BondDetailGuard ], component: BondDetailComponent },
      { path: 'bonds/:id/edit', canActivate: [ BondDetailGuard ], component: BondDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [BondService],
  bootstrap: [AppComponent]
})

export class AppModule { }