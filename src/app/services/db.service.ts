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

  addOrder(order: Orden, orderDetailsReceive: Array<OrdenDetalles>) {
    this.orders.push(order)
    
    this.saveOrderDetails(orderDetailsReceive)
  }

  editOrder() {

  }

  private saveOrderDetails(orderDetailsReceive: Array<OrdenDetalles>) {
    if(orderDetailsReceive.length > 0){
      for(let orderdetails of orderDetailsReceive){
        this.orderDetails.push(orderdetails)
      }
    }
    console.log(this.orders, this.orderDetails)
  }

  processPedido() {
    let isv: number = 0
    let subTotal: number = 0
    for(let order of this.orders) {
      subTotal += order.precio
    }
    isv = subTotal * 0.15
    console.log(subTotal, isv)
    let pedido: Pedido = {
      id: this.pedidos.length + 1,
      idUsuario: this.usuario.id,
      estado: "pendiente",
      isv,
      total: subTotal + isv
    }
    this.pedidoId = pedido.id
    this.pedidos.push(pedido)
    console.log(this.orders, this.orderDetails, this.pedidos)
  }
}