import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Villa9TroisPage } from './villa9-trois.page';

const routes: Routes = [
  {
    path: '',
    component: Villa9TroisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Villa9TroisPageRoutingModule {}
