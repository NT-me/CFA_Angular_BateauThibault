import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },
  {
    path: 'bistrot-des-gascons',
    loadChildren: () => import('./bistrot-des-gascons/bistrot-des-gascons.module').then( m => m.BistrotDesGasconsPageModule)
  },
  {
    path: 'les-fous-de-lile',
    loadChildren: () => import('./les-fous-de-lile/les-fous-de-lile.module').then( m => m.LesFousDeLilePageModule)
  },
  {
    path: 'bistrot-landais',
    loadChildren: () => import('./bistrot-landais/bistrot-landais.module').then( m => m.BistrotLandaisPageModule)
  },
  {
    path: 'villa9-trois',
    loadChildren: () => import('./villa9-trois/villa9-trois.module').then( m => m.Villa9TroisPageModule)
  },
  {
    path: 'bistrot-du-sommelier',
    loadChildren: () => import('./bistrot-du-sommelier/bistrot-du-sommelier.module').then( m => m.BistrotDuSommelierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
