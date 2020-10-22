import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeLaBrisePageRoutingModule } from './de-la-brise-routing.module';

import { DeLaBrisePage } from './de-la-brise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeLaBrisePageRoutingModule
  ],
  declarations: [DeLaBrisePage]
})
export class DeLaBrisePageModule {}
