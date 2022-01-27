import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { DbService } from './services/db.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Pedidos', url: '/pedidos', icon: 'bag-handle' },
    { title: 'Administrar Usuarios', url: '/users-admin', icon: 'person-add', lock: 'admin' },
    { title: 'Cerrar Sesión', url: '/sign-in', icon: 'log-out' },
  ];
  /* public labels = [
    { title: 'Cerrar Sesión', url: '/sign-in', icon: 'log-out' }
  ]; */

  user:User
  constructor(private dbSvc: DbService) {
    this.user = dbSvc.usuario
  }
}