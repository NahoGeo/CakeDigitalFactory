import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Producto } from 'src/app/interfaces/producto';
import { Detalle } from 'src/app/interfaces/detalle';
import { Orden } from 'src/app/interfaces/orden';
import { OrdenDetalles } from 'src/app/interfaces/orden-detalles';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product: Producto
  details: Array<Detalle> = []
  detailsSelected: Array<Detalle> = []
  order: Orden
  cuantity: number = 1
  subTotal: number
  totalAmount: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbSvc: DbService
    ) { }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('productId'))
    this.product = this.dbSvc.getProductById(id)
    this.details = this.dbSvc.getDetailsByProductId(id)
    this.totalAmount = this.product.precio
    if(this.dbSvc.makingPedido) {
      this.order.idPedido = this.dbSvc.pedidoId
    }
  }

  agregarRemoverDetalle() {
    if(this.detailsSelected.length > 0) {
      for(let detail of this.details) {
        if(detail.seleccionado) {
          let addDetail: boolean = true
          for(let detailSelected of this.detailsSelected) {
            if(detail.id === detailSelected.id) {
              addDetail = false
            }
          }
          if(addDetail) {
            this.detailsSelected.push(detail)
          }
        }else{
          let removeDetail: boolean = false
          for(let detailSelected of this.detailsSelected) {
            if(detail.id === detailSelected.id) {
              removeDetail = true
            }
            if(removeDetail) {
              this.detailsSelected = this.detailsSelected.filter(oldDetail=>{return detail.id !== oldDetail.id})
            }
          }
        }
      }
    }else{
      for(let detail of this.details) {
        if(detail.seleccionado) {
          this.detailsSelected.push(detail)
        }
      }
    }
    this.totalAdded()
  }

  totalAdded() {
    let detailTotal: number = 0
    for(let detail of this.details) {
      for(let detailSelected of this.detailsSelected){
        if(detail.id === detailSelected.id){
          detailTotal += detail.precio
        }
      }
    }
    this.totalAmount = (this.product.precio + detailTotal) * this.cuantity
  }

  addOrder() {
    if(!this.order.idPedido){
      this.order = {
        idProducto: this.product.id,
        cantidad: this.cuantity,
        precio: this.totalAmount
      }
      this.order.idPedido = this.dbSvc.addNewPedido(this.order, this.detailsSelected)
    }else{
      this.dbSvc.addOrder(this.order, this.detailsSelected)
    }
  }

}