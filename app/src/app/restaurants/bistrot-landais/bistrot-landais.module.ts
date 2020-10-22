import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotLandaisPageRoutingModule } from './bistrot-landais-routing.module';

import { BistrotLandaisPage } from './bistrot-landais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotLandaisPageRoutingModule
  ],
  declarations: [BistrotLandaisPage]
})
export class BistrotLandaisPageModule {}
