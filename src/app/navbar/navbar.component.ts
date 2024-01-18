import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, roles } from './User';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  homePage: String = 'MainPage 29';

    // User Object
    User: User[] = [
      {
        id: 1,
        username: 'Umut Baran Demir',
        email: 'baran292907@hotmail.com',
        password: '123456',
        pictures:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://admin1/',
        roles: roles.admin,
      },
      {
        id: 2,
        username: 'writer1',
        email: 'writer1@gmail.com',
        password: '123456',
        pictures:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://writer1/',
        roles: roles.writer,
      },
      {
        id: 3,
        username: 'user1',
        email: 'user1@gmail.com',
        password: '123456',
        pictures:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://user1/',
        roles: roles.user,
      },
    ];

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
    isLogin: true, //false
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    navbar: [
      { id: 1, name: 'MainPage', link: '/', fontAwesome: 'fa-solid fa-house-chimney'},
      { id: 2, name: 'About Me', link: '/about-me', fontAwesome: 'font-2' },
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
