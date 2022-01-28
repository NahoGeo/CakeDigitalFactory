import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  order: Orden = {
    id: 0,
    idCliente: 0,
    idProducto: 0,
    idPedido: 0,
    cantidad: 0,
    precio: 0
  }
  orderDetailsSelected: Array<OrdenDetalles>=[]
  cuantity: number = 1
  subTotal: number
  totalAmount: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbSvc: DbService,
    private router: Router
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
    if(this.orderDetailsSelected.length > 0) {
      for(let detail of this.details) {
        if(detail.seleccionado) {
          let addDetail: boolean = true
          for(let detailSelected of this.orderDetailsSelected) {
            if(detail.id === detailSelected.id) {
              addDetail = false
            }
          }
          if(addDetail) {
            let orderDetail: OrdenDetalles = {
              id: 0,
              idDetalle: detail.id,
              idOrden: this.order.id,
              precioDetalle: detail.precio
            }
            this.orderDetailsSelected.push(orderDetail)
          }
        }else{
          let removeDetail: boolean = false
          for(let detailSelected of this.orderDetailsSelected) {
            if(detail.id === detailSelected.id) {
              removeDetail = true
            }
            if(removeDetail) {
              this.orderDetailsSelected = this.orderDetailsSelected.filter(oldDetail=>{return detail.id !== oldDetail.id})
            }
          }
        }
      }
    }else{
      for(let detail of this.details) {
        if(detail.seleccionado) {
          let orderDetail: OrdenDetalles = {
            id: 0,
            idDetalle: detail.id,
            idOrden: this.order.id,
            precioDetalle: detail.precio
          }
          this.orderDetailsSelected.push(orderDetail)
        }
      }
    }
    this.totalAdded()
  }

  totalAdded() {
    let detailTotal: number = 0
    for(let orderDetail of this.orderDetailsSelected){
      detailTotal += orderDetail.precioDetalle
    }
    this.totalAmount = (this.product.precio + detailTotal) * this.cuantity
  }

  addOrder() {
    this.order = {
      idCliente: this.product.idCliente,
      idProducto: this.product.id,
      cantidad: this.cuantity,
      precio: this.totalAmount
    }
    this.dbSvc.addOrder(this.order, this.orderDetailsSelected)
    this.router.navigate([`/inicio/${this.product.id}`])
  }

}