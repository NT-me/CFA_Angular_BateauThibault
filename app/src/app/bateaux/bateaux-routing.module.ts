import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauxPage } from './bateaux.page';

const routes: Routes = [
  {
    path: '',
    component: BateauxPage
  },
  {
    path: 'de-la-brise',
    loadChildren: () => import('./de-la-brise/de-la-brise.module').then( m => m.DeLaBrisePageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gast-micher',
    loadChildren: () => import('./gast-micher/gast-micher.module').then( m => m.GastMicherPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./aquilon/aquilon.module').then( m => m.AquilonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauxPageRoutingModule {}
