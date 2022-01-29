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
    Id: 1,
    Nombre: "Oscar Bonilla",
    Rol: "admin"
  }

  setUser(user: User) {
    this.usuario = user
  }

  private bakerys:Array<User>=[
    {
      Id: 1,
      Img: "",
      Nombre: "Reposteria mi repo 1",
      Contrasena: "contrasena123",
      Descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad",
      Correo: "cualquier@correo.com",
      Direccion: "a la par de tu casa",
      Telefono: "1234-5678",
      Rol: "cliente"
    },
    {
      Id: 2,
      Img: "",
      Nombre: "Reposteria mi repo 2",
      Contrasena: "contrasena123",
      Descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad",
      Correo: "cualquier@correo.com",
      Direccion: "a la par de tu casa",
      Telefono: "1234-5678",
      Rol: "cliente"
    },
    {
      Id: 3,
      Img: "",
      Nombre: "Reposteria mi repo 3",
      Contrasena: "contrasena123",
      Descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad",
      Correo: "cualquier@correo.com",
      Direccion: "a la par de tu casa",
      Telefono: "1234-5678",
      Rol: "cliente"
    },
    {
      Id: 4,
      Img: "",
      Nombre: "Reposteria mi repo 4",
      Contrasena: "contrasena123",
      Descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad",
      Correo: "cualquier@correo.com",
      Direccion: "a la par de tu casa",
      Telefono: "1234-5678",
      Rol: "cliente"
    },
    {
      Id: 5,
      Img: "",
      Nombre: "Reposteria mi repo 5",
      Contrasena: "contrasena123",
      Descripcion: "somos una reposteria enfocada en complacer los gustos de nuestros clientes y brindarles una atencion de calidad",
      Correo: "cualquier@correo.com",
      Direccion: "a la par de tu casa",
      Telefono: "1234-5678",
      Rol: "cliente"
    }
  ]

  private type = []

  private productos: Array<Producto>=[
    {
      Id: 1,
      IdCliente: 1,
      Img: "",
      Nombre: "Pastel para 8 personas",
      Descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      Precio: 150
    },
    {
      Id: 2,
      IdCliente: 1,
      Img: "",
      Nombre: "Pastel para 12 personas",
      Descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      Precio: 300
    },
    {
      Id: 3,
      IdCliente: 1,
      Img: "",
      Nombre: "Pastel para 20 personas",
      Descripcion: "Pastel con crema chantilli con decorado al borde perfecto para compartir con tu familia",
      Precio: 450
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
      Id: 1,
      IdProducto: 1,
      Nombre: "Chispas de Chocolate",
      Precio: 15,
      seleccionado: false
    },
    {
      Id: 2,
      IdProducto: 1,
      Nombre: "Chispas de Dulce",
      Precio: 15,
      seleccionado: false
    },
    {
      Id: 3,
      IdProducto: 1,
      Nombre: "Fresas",
      Precio: 40,
      seleccionado: false
    },
    {
      Id: 4,
      IdProducto: 1,
      Nombre: "Cerezas",
      Precio: 60,
      seleccionado: false
    }
  ]

  getBakerys(){
    return [...this.bakerys]
  }

  getBakeryById(id: number){
    let bakerySelected: User
    for(let bakery of [...this.bakerys]) {
      if(bakery.Id === id) {
        bakerySelected = bakery
      }
    }
    return bakerySelected
  }

  getProductsByBakeryId(id: number){
    let productsList: Array<Producto>=[]
    for(let product of [...this.productos]) {
      if(product.IdCliente === id) {
        productsList.push(product)
      }
    }
    return productsList
  }

  getProductById(id: number) {
    let productSelected: Producto
    for(let product of [...this.productos]) {
      if(product.Id === id) {
        productSelected = product
      }
    }
    return productSelected
  }

  getDetailsByProductId(id: number){
    let detailsList: Array<Detalle>=[]
    for(let detail of [...this.details]) {
      if(detail.IdProducto === id) {
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
    let Isv: number = 0
    let subTotal: number = 0
    for(let order of this.orders) {
      subTotal += order.Precio
    }
    Isv = subTotal * 0.15
    console.log(subTotal, Isv)
    let pedido: Pedido = {
      Id: this.pedidos.length + 1,
      IdUsuario: this.usuario.Id,
      Estado: "pendiente",
      Isv,
      Total: subTotal + Isv
    }
    this.pedidoId = pedido.Id
    this.pedidos.push(pedido)
    console.log(this.orders, this.orderDetails, this.pedidos)
  }
}