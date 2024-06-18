export class Profile {

  /*id: number;
  firstName: string;
  lastName: string;
  photo: string;
  rol: string;
  membership: string;

  constructor(id:number,firstName:string,lastName:string,photo:string,rol:string,membership:string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.photo = photo;
    this.rol = rol;
    this.membership = membership;
  }*/

  id: number;
  imageProfile: string;
  lastName: string
  firstName: string
  emailAddress: string;

  constructor(id:number,imageProfile:string,lastName:string,firstName:string,emailAdress:string) {
    this.id =id;
    this.imageProfile = imageProfile;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress= emailAdress;
  }

}
