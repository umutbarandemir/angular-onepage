// User
export class User {
    // Field
    id: number;
    username: string;
    email: string;
    password: string;
    pictures: string;
    date: string;
    link: string;
    //rolles:Dizi
    roles: roles[];
  
    // Constructor
    constructor(
      id: number,
      username: string,
      email: string,
      password: string,
      pictures: string,
      date: string,
      link: string,
      roles: roles[]
    ) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.pictures = pictures;
      this.date = date;
      this.link = link;
      this.roles = roles;
    }
    // Method
  }
  
  // rolles: Enum (admin,writer,user)
  // rolles: Dizi
  // Person nesnesinden abstract
  enum roles {
    admin = "admin",
    user = "user",
    writer = "writer",
}
  