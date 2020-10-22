import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotDuSommelierPageRoutingModule } from './bistrot-du-sommelier-routing.module';

import { BistrotDuSommelierPage } from './bistrot-du-sommelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotDuSommelierPageRoutingModule
  ],
  declarations: [BistrotDuSommelierPage]
})
export class BistrotDuSommelierPageModule {}
