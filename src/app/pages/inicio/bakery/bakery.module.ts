import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BakeryPageRoutingModule } from './bakery-routing.module';

import { BakeryPage } from './bakery.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BakeryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BakeryPage]
})
export class BakeryPageModule {}
