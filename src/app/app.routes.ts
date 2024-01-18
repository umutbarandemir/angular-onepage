import { Routes } from '@angular/router';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnePageBlogPageComponent } from './one-page-blog-page/one-page-blog-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    //HomePage
    {path:'index',component:OnepageMainComponent},
    {path:'',redirectTo:"index",pathMatch:'full'},
    //Blog
    {path:'blog',component:OnePageBlogPageComponent},
    //Login
    {path:'login',component:LoginComponent},
    //Register
    {path:'register',component:RegisterComponent},
];


/* 
<a class="btn btn-primary" routerLink="/about">About444</a>
<a class="dropdown-item" routerLink="/login" >Login</a>
<a class="dropdown-item" routerLink="/register">Register</a>
<a class="dropdown-item" routerLink="/blog">Blog</a>
*/