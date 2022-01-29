import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {

  client: User

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiSvc: ApiService,
    private dbSvc: DbService
  ) { }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('clientId'))
    this.client = this.dbSvc.getBakeryById(id)
  }

}
