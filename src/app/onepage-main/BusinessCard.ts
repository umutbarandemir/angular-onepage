export class BusinessCard{

    id:number;
    title:string;
    text:string;
    icon:string;   

    constructor(id:number,title:string,text:string,icon:string){
        this.id=id;
        this.title=title;
        this.text=text;
        this.icon=icon;
    }
}