declare type Status = 'creando' | 'pendiente' | 'en proceso' | 'listo' | 'entregado'
export interface Pedido {
  id: number
  idUsuario: number
  estado: Status
  isv: number
  total: number
}