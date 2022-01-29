import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.page.html',
  styleUrls: ['./users-admin.page.scss'],
})
export class UsersAdminPage implements OnInit {

  title = "Administrar"
  bakerys: Array<User>

  constructor(private dbSvc: DbService) { }

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

  editBakery(id: number) {
    
  }

}
