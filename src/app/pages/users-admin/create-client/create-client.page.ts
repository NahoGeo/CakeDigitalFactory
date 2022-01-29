import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
})
export class CreateClientPage implements OnInit {

  client: User = {
    Id: 0,
    Img: "",
    Nombre: "",
    Contrasena: "",
    Descripcion: "",
    Correo: "",
    Direccion: "",
    Telefono: "",
    Rol: "usuario"
  }

  constructor() { }

  ngOnInit() {
  }

}
