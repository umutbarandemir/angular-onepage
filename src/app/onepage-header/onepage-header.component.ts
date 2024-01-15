import { Component } from '@angular/core';

@Component({
  // html 
  selector: 'app-onepage-header',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme
  imports: [],

  // Html5 Url
  templateUrl: './onepage-header.component.html',

  // Css3 Url
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {
  homepage:String = "MainPage29";
  

  navBar:{
    isLoggedin:boolean;
    logo:String;
    link:String;
    search:{};
    navbarLink:any[];
  } = { 
    isLoggedin:true,
    logo:"",
    link:"",
    search:{
      name:"Search",
      placeholder:"Search",
      type:"text",
    },
    navbarLink:[
      {id:1,name:"MainPage",link:"/",fontAwsome:"font-1"},
      {id:2,name:"AboutMe",link:"/abouttme",fontAwsome:"font-2"},
      {id:3,name:"Blog",link:"/blog",fontAwsome:"font-3"},
      {id:4,name:"Contact",link:"/contact",fontAwsome:"font-4"}],
  }
  

}