export class SocialContent{

    id:number;
    text:string;
    link:string;
    icon:string;
    classSocial:string;
    

    constructor(id:number,text:string,link:string,icon:string,classSocial:string){
        this.id=id;
        this.text=text;
        this.link=link;
        this.icon=icon;
        this.classSocial=classSocial;
    }
}