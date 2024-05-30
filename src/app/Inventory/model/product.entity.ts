export class Product {
  id: number;
  image: string;
  name: string;
  expirationDate: string;
  productionDate: string;
  state: string;
  id_provider: number;

  constructor() {
    this.id=0;
    this.image='';
    this.name='';
    this.expirationDate='';
    this.productionDate='';
    this.state='';
    this.id_provider=0;
  }
}
