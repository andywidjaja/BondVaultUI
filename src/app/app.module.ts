import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

import { AppComponent } from './app.component';
import { BondService } from './services/bond.service';
import { HomeComponent } from './home/home.component';
import { BondData } from './bonds/bond-data';
import { BondModule } from './bonds/bond.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(BondData, {passThruUnknownUrl: true}),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'BondVault App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ], {enableTracing: true}),
    BondModule
  ],
  providers: [
    BondService,
    NbSidebarService],
  bootstrap: [AppComponent]
})

export class AppModule { }