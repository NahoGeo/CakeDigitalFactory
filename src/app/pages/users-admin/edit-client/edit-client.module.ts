import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClientPageRoutingModule } from './edit-client-routing.module';

import { EditClientPage } from './edit-client.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClientPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditClientPage]
})
export class EditClientPageModule {}
