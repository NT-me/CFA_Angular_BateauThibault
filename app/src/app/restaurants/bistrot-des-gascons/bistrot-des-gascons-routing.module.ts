import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotDesGasconsPage } from './bistrot-des-gascons.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotDesGasconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotDesGasconsPageRoutingModule {}
