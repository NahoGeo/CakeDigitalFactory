import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/services/validator.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  user: User

  constructor(
    private router: Router,
    private validatorSvc: ValidatorService,
    private apiSvc: ApiService,
    private dbSvc: DbService
    ) { }

  ngOnInit() {
  }

  signIn(userName: any, password: any){
    userName = userName.value.trim()
    password = password.value.trim()
    this.user = {
      id: 0,
      nombre: userName,
      contrasena: password
    }
    console.log(this.user)
    /* this.apiSvc.signIn(this.user).subscribe(
      res=>{
        if(res.message === "Login Complete") {
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
