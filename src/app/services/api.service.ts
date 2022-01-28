import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { DbService } from './db.service';
import { Orden } from '../interfaces/orden';
import { Detalle } from '../interfaces/detalle';
import { OrdenDetalles } from '../interfaces/orden-detalles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user: User

  http: "http://localhost:3000/api/CakeDigitalFactory"

  constructor(private httpClient: HttpClient, private dbSvc: DbService) {
  }

  assignUser() {
    this.user = this.dbSvc.usuario
  }

  getUser(): Observable<any> {
    return this.httpClient.get<any>(`${this.http}/get-user`)
  }

  getBakerys(): Observable<any> {
    return this.httpClient.get<any>(`${this.http}/get-panaderias`)
  }

  getBakeryById(id: number): Observable<User> {
    return this.httpClient.get<any>(`${this.http}/get-panaderia-by-id/${id}`)
  }

  signIn(user: User): Observable<any> {
    return this.httpClient.post<User>(`${this.http}/login`, user)
  }

  addOrder(order: Orden, detailsSelected: Array<OrdenDetalles>): Observable<any> {
    let data = [
      order,
      detailsSelected
    ]
    return this.httpClient.post<any>(`${this.http}/add-order/${this.dbSvc.usuario.id}`, data)
  }

  processPedido(order: Array<Orden>, detailsSelected: Array<OrdenDetalles>): Observable<any> {
    let data = [
      order,
      detailsSelected
    ]
    return this.httpClient.post<any>(`${this.http}/create-pedido/${this.dbSvc.usuario.id}`, data)
  }
}