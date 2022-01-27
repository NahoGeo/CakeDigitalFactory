import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {

  bakery: User
  products: Array<Producto>

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiSvc: ApiService,
    private dbSvc: DbService
    ) { }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('bakeryId'))
    this.bakery = this.dbSvc.getBakeryById(id)
    this.products = this.dbSvc.getProductsByBakeryId(id)
    /* this.apiSvc.getBakeryById(id).subscribe(
      client=>{
        this.bakery = client
      },
      err=>{
        console.error(err)
      }
    ) */
  }

}
