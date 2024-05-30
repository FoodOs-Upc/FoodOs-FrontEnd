import {Product} from "./product.entity";

export interface Inventory {
  id: number
  id_profile: number
  products: Product[]
  id_group: number
  files: any[]
}
