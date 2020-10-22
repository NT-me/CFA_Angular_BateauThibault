import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Villa9TroisPageRoutingModule } from './villa9-trois-routing.module';

import { Villa9TroisPage } from './villa9-trois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Villa9TroisPageRoutingModule
  ],
  declarations: [Villa9TroisPage]
})
export class Villa9TroisPageModule {}
