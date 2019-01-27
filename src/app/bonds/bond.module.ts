import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondsComponent } from './bonds.component';
import { BondDetailComponent } from './bond-detail.component';
import { RouterModule } from '@angular/router';
import { BondDetailGuard } from './bond-detail.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { bondReducer } from './state/bond.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    StoreModule.forFeature('bonds', {bondReducer}),
    RouterModule.forChild([
      { path: 'bonds', component: BondsComponent },
      { path: 'bonds/:id', canActivate: [ BondDetailGuard ], component: BondDetailComponent },
      { path: 'bonds/:id/edit', canActivate: [ BondDetailGuard ], component: BondDetailComponent }
    ])
  ],
  declarations: [
    BondsComponent,
    BondDetailComponent
  ]
})

export class BondModule { }
