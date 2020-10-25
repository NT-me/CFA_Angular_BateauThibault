import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test-page',
    loadChildren: () => import('./test-page/test-page.module').then( m => m.TestPagePageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./bateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'de-la-brise',
    loadChildren: () => import('./bateaux/de-la-brise/de-la-brise.module').then( m => m.DeLaBrisePageModule)
  },
  {
    path: 'gast-micher',
    loadChildren: () => import('./bateaux/gast-micher/gast-micher.module').then( m => m.GastMicherPageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./bateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'homard',
    loadChildren: () => import('./recipes/homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'st-jacques',
    loadChildren: () => import('./recipes/st-jacques/st-jacques.module').then( m => m.StJacquesPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./recipes/bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./recipes/tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'bistrot-des-gascons',
    loadChildren: () => import('./restaurants/bistrot-des-gascons/bistrot-des-gascons.module').then( m => m.BistrotDesGasconsPageModule)
  },
  {
    path: 'bistrot-du-sommelier',
    loadChildren: () => import('./restaurants/bistrot-du-sommelier/bistrot-du-sommelier.module').then( m => m.BistrotDuSommelierPageModule)
  },
  {
    path: 'bistrot-landais',
    loadChildren: () => import('./restaurants/bistrot-landais/bistrot-landais.module').then( m => m.BistrotLandaisPageModule)
  },
  {
    path: 'les-fous-de-lile',
    loadChildren: () => import('./restaurants/les-fous-de-lile/les-fous-de-lile.module').then( m => m.LesFousDeLilePageModule)
  },
  {
    path: 'villa9-trois',
    loadChildren: () => import('./restaurants/villa9-trois/villa9-trois.module').then( m => m.Villa9TroisPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recipes/recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'display-products/:catId',
    loadChildren: () => import('./display-products/display-products.module').then( m => m.DisplayProductsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
