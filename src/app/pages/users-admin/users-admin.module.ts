import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersAdminPageRoutingModule } from './users-admin-routing.module';

import { UsersAdminPage } from './users-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UsersAdminPage]
})
export class UsersAdminPageModule {}
