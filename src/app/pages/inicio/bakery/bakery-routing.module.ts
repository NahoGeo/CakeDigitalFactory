import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakeryPage } from './bakery.page';

const routes: Routes = [
  {
    path: '',
    component: BakeryPage
  },
  {
    path: ':productId',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BakeryPageRoutingModule {}
