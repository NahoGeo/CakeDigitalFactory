import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  title = "inicio"
  bakerys: Array<User>=[]

  constructor(
    private apiSvc: ApiService,
    private dbSvc: DbService
  ) { }

  ngOnInit() {
    /* this.apiSvc.getBakerys().subscribe(
      res=> {
        if(res.message === "listo"){
          this.bakerys = res.data
        }
      },
      err=> {
        console.error(err)
      }
    ) */
    this.bakerys = this.dbSvc.getBakerys()
  }

}
