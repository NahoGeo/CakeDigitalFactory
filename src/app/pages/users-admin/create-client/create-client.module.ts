import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateClientPageRoutingModule } from './create-client-routing.module';

import { CreateClientPage } from './create-client.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateClientPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateClientPage]
})
export class CreateClientPageModule {}
