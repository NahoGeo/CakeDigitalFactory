import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProcessBtnComponent } from './process-btn/process-btn.component';
import { CreateEditClientComponent } from './create-edit-client/create-edit-client.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    ProcessBtnComponent,
    CreateEditClientComponent
  ],
  exports:[
    HeaderComponent,
    ProcessBtnComponent,
    CreateEditClientComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
