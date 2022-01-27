import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Detalle } from '../interfaces/detalle';
import { Producto } from '../interfaces/producto';
import { Orden } from '../interfaces/orden';
import { Pedido } from '../interfaces/pedido';
import { OrdenDetalles } from '../interfaces/orden-detalles';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  usuario: User = {
    id: 1,
    nombre: "Oscar Bonilla",
    rol: "admin"
  }

  setUser(user: User) {
    this.usuario = user
  }

  private bakerys:Array<User>=[
    {
      id: 1,
      img: "",
      nombre: "Reposteria mi repo 1",
      descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad"
    },
    {
      id: 2,
      img: "",
      nombre: "Reposteria mi repo 2",
      descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad"
    },
    {
      id: 3,
      img: "",
      nombre: "Reposteria mi repo 3",
      descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad"
    },
    {
      id: 4,
      img: "",
      nombre: "Reposteria mi repo 4",
      descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad"
    },
    {
      id: 5,
      img: "",
      nombre: "Reposteria mi repo 5",
      descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad"
    }
  ]

  private type = []

  private productos: Array<Producto>=[
    {
      id: 1,
      idCliente: 1,
      img: "",
      nombre: "Pastel para 8 personas",
      descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      precio: 150
    },
    {
      id: 2,
      idCliente: 1,
      img: "",
      nombre: "Pastel para 12 personas",
      descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      precio: 300
    },
    {
      id: 3,
      idCliente: 1,
      img: "",
      nombre: "Pastel para 20 personas",
      descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      precio: 450
    }
  ]

  private orders: Array<Orden> = []
  private pedidos: Array<Pedido> = []
  private orderDetails: Array<OrdenDetalles> = []
  makingPedido: boolean = false
  pedidoId: number
  isPedidoActive: boolean = false


  private details: Array<Detalle>=[
    {
      id: 1,
      idProducto: 1,
      nombre: "Chispas de Chocolate",
      precio: 15,
      seleccionado: false
    },
    {
      id: 2,
      idProducto: 1,
      nombre: "Chispas de Dulce",
      precio: 15,
      seleccionado: false
    },
    {
      id: 3,
      idProducto: 1,
      nombre: "Fresas",
      precio: 40,
      seleccionado: false
    },
    {
      id: 4,
      idProducto: 1,
      nombre: "Cerezas",
      precio: 60,
      seleccionado: false
    }
  ]

  getBakerys(){
    return [...this.bakerys]
  }

  getBakeryById(id: number){
    let bakerySelected: User
    for(let bakery of [...this.bakerys]) {
      if(bakery.id === id) {
        bakerySelected = bakery
      }
    }
    return bakerySelected
  }

  getProductsByBakeryId(id: number){
    let productsList: Array<Producto>=[]
    for(let product of [...this.productos]) {
      if(product.idCliente === id) {
        productsList.push(product)
      }
    }
    return productsList
  }

  getProductById(id: number) {
    let productSelected: Producto
    for(let product of [...this.productos]) {
      if(product.id === id) {
        productSelected = product
      }
    }
    return productSelected
  }

  getDetailsByProductId(id: number){
    let detailsList: Array<Detalle>=[]
    for(let detail of [...this.details]) {
      if(detail.idProducto === id) {
        detailsList.push(detail)
      }
    }
    return detailsList
  }

  addNewPedido(order: Orden, orderDetailsReceive: Array<Detalle>) {
    let pedido: Pedido = {
      id: this.pedidos.length + 1,
      idUsuario: this.usuario.id,
      estado: "creando",
      isv: order.precio * 0.15,
      total: order.precio + order.precio * 0.15
    }
    order.id = this.orders.length + 1
    order.idPedido = pedido.id
    this.orders.push(order)
    this.pedidos.push(pedido)
    this.saveOrderDetails(order.id, orderDetailsReceive)

    this.makingPedido = true
    this.isPedidoActive = true
    this.pedidoId = pedido.id
    return pedido.id
  }

  addOrder(order: Orden, orderDetailsReceive: Array<Detalle>) {
    let newIsv: number
    let newTotal: number
    order.id = this.orders.length + 1
    newIsv: order.precio * 0.15
    newTotal: order.precio + order.precio * 0.15
    this.orders.push(order)
    for(let pedido of this.pedidos){
      if(pedido.id === order.idPedido) {
        pedido.isv = pedido.isv + newIsv
        pedido.total = pedido.total + newTotal
      }
    }
    this.saveOrderDetails(order.id, orderDetailsReceive)
  }

  private saveOrderDetails(idOrder: number, orderDetailsReceive: Array<Detalle>) {
    for(let orderdetailReceive of orderDetailsReceive){
      this.orderDetails.push({
        id: this.orderDetails.length + 1,
        idOrden: idOrder,
        idDetalle: orderdetailReceive.id,
        precioDetalle: orderdetailReceive.precio
      })
    }
    console.log(this.orders, this.orderDetails, this.pedidos)
  }

  processPedido(idPedido: number) {
    for(let pedido of this.pedidos) {
      if(pedido.id === idPedido && pedido.estado === "creando"){
        pedido.estado = "pendiente"
      }
    }
  }
}