import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BondsComponent } from './bonds/bonds.component';
import { BondService } from './services/bond.service';
import { BondDetailComponent } from './bonds/bond-detail.component';
import { HomeComponent } from './home/home.component';
import { BondDetailGuard } from './bonds/bond-detail.guard';

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
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'bonds', component: BondsComponent },
      { path: 'bonds/:cusip', canActivate: [ BondDetailGuard ], component: BondDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [BondService],
  bootstrap: [AppComponent]
})

export class AppModule { }