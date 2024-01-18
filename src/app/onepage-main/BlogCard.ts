export class BlogCard{

    id:number;
    title:string;
    text:string;
    description:string;
    picture:string;
    date:string;
    link:string;
    

    constructor(id:number,title:string,text:string,description:string,picture:string,date:string,link:string){
        this.id=id;
        this.title=title;
        this.text=text;
        this.description=description;
        this.picture=picture;
        this.date=date;
        this.link=link;
    }
}