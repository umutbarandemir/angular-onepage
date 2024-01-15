import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  homePage: String = 'Anasayfa 44';

  // navBar:{}={};
  navBar: {
    isLogin: boolean;
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: any[]; //Array<any>
    search: {
      name:string,
      placeholder:string,
      type:string,
      style:string,
    };
    } = {
    isLogin: true,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    navbar: [
      { id: 1, name: 'Anasayfa', link: '/', fontAwesome: 'fa-solid fa-house-chimney'},
      { id: 2, name: 'AboutMe', link: '/about-me', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '/blog', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '/contact', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Search ...',
      type: 'text',
      style:"btn btn-primary"
    },
  }; //navBar Object
}
