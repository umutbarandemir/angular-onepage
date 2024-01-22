//ENUM
export enum roles {
    admin = "Admin",
    user = "User",
    writer = "Writer",
}
//Interface , ng g i IUser => interface
export interface IUser{
  name: string;
  surname: string;
  email: string;
  password:string;
}

//Abstract
abstract class Person implements IUser {
  //common field
  id: number;
  username: string;
  pictures: string;
  date: string;
  link: string;

  //interfacefield
  name: string;
  surname: string;
  email: string;
  password: string;

constructor(id:number,name:string,surname:string,username:string,email:string,password:string,pictures:string,date:string,link:string){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.username = username;
  this.email = email;
  this.password = password;
  this.pictures = pictures;
  this.date = date;
  this.link = link;
}


// personinformation():void{
//   console.log("gövdeli method");
// }
}

// User
export class User extends Person {
    // Field
    roles: string;
  
    // Constructor
    constructor(id:number,name:string,surname:string,username:string,email:string,password:string,pictures:string,date:string,link:string,roles:string) {
      super(id,name,surname,username,email,password,pictures,date,link);
      this.roles = roles;
    }
    // Method
  }
  