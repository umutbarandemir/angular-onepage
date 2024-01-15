export class BlogCard{

    id:number;
    title:string;
    text:string;
    description:string;
    picture:string;
    

    constructor(id:number,title:string,text:string,description:string,picture:string){
        this.id=id;
        this.title=title;
        this.text=text;
        this.description=description;
        this.picture=picture;
    }
}