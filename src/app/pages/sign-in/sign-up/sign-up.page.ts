import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { DbService } from 'src/app/services/db.service';
import { AlertControllerService } from 'src/app/services/alert-controller.service';
import { AlertButton } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user: User

  constructor(
    private router: Router,
    private apiSvc: ApiService,
    private dbSvc: DbService,
    private alertCtrl: AlertControllerService
    ) { }

  ngOnInit() {

  }

  async signUp(userName: any, password: any, password2: any){
    let errorMessage: string = ``

    userName = userName.value.trim()
    password = password.value.trim()
    password2 = password2.value.trim()
    if(!userName){
      errorMessage+= `<p>- Usuario no puede estar vacío</p>`
    }
    if(!password){
      errorMessage+= `<p>- Contraseña no puede estar vacío</p>`
    }
    if(!password2){
      errorMessage+= `<p>- Confirmar contraseña no puede estar vacío</p>`
    }
    if(password && password2 && password !== password2) {
      errorMessage+= `<p>- Las contraseñas no coinciden</p>`
    }
    if(errorMessage) {
      await this.alertCtrl.presentAlert("Error", errorMessage)
    }else{
      console.log(userName, password, password2)
      /* this.apiSvc.signUp(this.user).subscribe(
        res=>{
          if(res.message === `Usuario ${res.Nombre} creado con exito`) {
            delete
            this.user = res.data
            this.dbSvc.setUser(this.user)
            this.router.navigate(['/inicio'])
          }else{
            console.log(res)
          }
        },
        err=>{
          console.error(err)
        }
      ) */
      this.router.navigate(['/inicio'])
    }
  }
}