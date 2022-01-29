import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-create-edit-client',
  templateUrl: './create-edit-client.component.html',
  styleUrls: ['./create-edit-client.component.scss'],
})
export class CreateEditClientComponent implements OnInit {

  @Input() client: User
  actions: string

  rols = ["usuario", "admin", "cliente"]

  constructor(
    private actionCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
    if(this.client.Id !== 0){
      this.actions = "editar"
    }else{
      this.actions = "Crear"
    }
  }

  async showOptions() {
    const buttons = [{
      text: 'Cámara',
      icon: 'camera',
      handler:()=>{
          this.selectedOption(CameraSource.Camera)
      }
    },{
      text: 'Galería',
      icon: 'image',
      handler:()=>{
        this.selectedOption(CameraSource.Photos)
      }
    }]

    const actionSheet= await this.actionCtrl.create({
      header: 'Recurso de la Imagen',
      buttons
    })

    return actionSheet.present()
  }

  async selectedOption(source:CameraSource) {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source
    })
    this.client.Img = image.dataUrl
  }

  valuesSelected(e) {
    this.client.Rol = e.detail.value
  }

  checkFields(){
    console.log(
      this.client
    )
  }
}