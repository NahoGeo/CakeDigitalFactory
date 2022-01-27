import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http: "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

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
}