import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesFousDeLilePage } from './les-fous-de-lile.page';

const routes: Routes = [
  {
    path: '',
    component: LesFousDeLilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesFousDeLilePageRoutingModule {}
