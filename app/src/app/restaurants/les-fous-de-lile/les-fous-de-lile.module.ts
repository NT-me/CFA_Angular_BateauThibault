import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesFousDeLilePageRoutingModule } from './les-fous-de-lile-routing.module';

import { LesFousDeLilePage } from './les-fous-de-lile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesFousDeLilePageRoutingModule
  ],
  declarations: [LesFousDeLilePage]
})
export class LesFousDeLilePageModule {}
