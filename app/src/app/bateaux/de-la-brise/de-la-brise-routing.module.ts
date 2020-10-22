import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeLaBrisePage } from './de-la-brise.page';

const routes: Routes = [
  {
    path: '',
    component: DeLaBrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeLaBrisePageRoutingModule {}
