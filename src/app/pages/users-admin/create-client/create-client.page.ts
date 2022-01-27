import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
})
export class CreateClientPage implements OnInit {

  client: User = {
    id: 0,
    img: "",
    nombre: "helloworld",
    contrasena: "fulano",
    descripcion: "cualquiercosa",
    correo: "correo@cliente.com",
    direccion: "a la par de una casa",
    telefono: "32502753",
    rol: "usuario"
  }

  constructor() { }

  ngOnInit() {
  }

}
