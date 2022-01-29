declare type Status = 'creando' | 'pendiente' | 'en proceso' | 'listo' | 'entregado'
export interface Pedido {
  Id: number
  IdUsuario: number
  Estado: Status
  Isv: number
  Total: number
}