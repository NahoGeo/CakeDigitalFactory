import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersAdminPage } from './users-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UsersAdminPage
  },
  {
    path: 'create-client',
    loadChildren: () => import('./create-client/create-client.module').then( m => m.CreateClientPageModule)
  },
  {
    path: 'edit-client',
    loadChildren: () => import('./edit-client/edit-client.module').then( m => m.EditClientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersAdminPageRoutingModule {}
