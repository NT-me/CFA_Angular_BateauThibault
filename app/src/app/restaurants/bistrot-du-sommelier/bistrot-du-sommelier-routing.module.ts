import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotDuSommelierPage } from './bistrot-du-sommelier.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotDuSommelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotDuSommelierPageRoutingModule {}
