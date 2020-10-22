import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotDesGasconsPageRoutingModule } from './bistrot-des-gascons-routing.module';

import { BistrotDesGasconsPage } from './bistrot-des-gascons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotDesGasconsPageRoutingModule
  ],
  declarations: [BistrotDesGasconsPage]
})
export class BistrotDesGasconsPageModule {}
