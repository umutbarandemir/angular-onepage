// import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SocialContent } from './SocialContent';

@Component({
  // html
  selector: 'app-onepage-header',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme
  imports: [CommonModule,NavbarComponent],

  // Html5 Url
  templateUrl: './onepage-header.component.html',

  // Css3 Url
  styleUrl: './onepage-header.component.css',
})
export class OnepageHeaderComponent {

  header:string="Welcome to my Angular OnePage Practice";
  title:string="Frontend, Angular, Typescript";

  socialContent:SocialContent[]=[
    {id:1,link:"http://link1",text:"LinkedIn",icon:"fa-brands fa-linkedin-in", classSocial:"btn btn-primary me-2"},
    {id:2,link:"http://link1",text:"Youtube",icon:"fa-brands fa-youtube", classSocial:"btn btn-danger me-2"},
    {id:3,link:"http://link1",text:"Github",icon:"fa-brands fa-github", classSocial:"btn btn-dark me-2"},
  ]

  constructor(){

  }
  
} //end OnepageHeaderComponent