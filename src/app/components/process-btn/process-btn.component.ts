import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-process-btn',
  templateUrl: './process-btn.component.html',
  styleUrls: ['./process-btn.component.scss'],
})
export class ProcessBtnComponent implements OnInit {

  constructor(
    private dbSvc: DbService
  ) { }

  ngOnInit() {}

  processPedido() {
    this.dbSvc.processPedido()
  }

}
