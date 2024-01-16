export enum roles {
    admin = "admin",
    user = "user",
    writer = "writer",
}

abstract class Person {
  id: number;
  username: string;
  email: string;
  password: string;
  pictures: string;
  date: string;
  link: string;

constructor(id:number,username:string,email:string,password:string,pictures:string,date:string,link:string){
  this.id = id;
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
    constructor(id:number,username:string,email:string,password:string,pictures:string,date:string,link:string,roles:string) {
      super(id,username,email,password,pictures,date,link);
      this.roles = roles;
    }
    // Method
  }
  