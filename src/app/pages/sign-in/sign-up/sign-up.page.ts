import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUp(user: any, password: any, password2: any){
    user = user.value.trim()
    password = password.value.trim()
    password2 = password2.value.trim()
    console.log(user, password, password2)
    this.router.navigate(['/inicio'])
  }

}
