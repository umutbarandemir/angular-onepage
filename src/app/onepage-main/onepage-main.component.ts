import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCard } from './BlogCard';
import { OnePageContent } from './OnePageContent';
import { BusinessCard } from './BusinessCard';
import { url } from 'inspector';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onepage-main',
  standalone: true,
  //*ngFor fonksiyonunun çalışması için bu CommonModule importlanmalı
  imports: [CommonModule,RouterLink],
  templateUrl: './onepage-main.component.html',
  styleUrl: './onepage-main.component.css'
})
export class OnepageMainComponent {
      onePageContent:OnePageContent[]=[
        {id:1,title:"my work"},
        {id:2,title:"about"},
        {id:3,title:"blog"},
        {id:4,title:"contact"},
      ];
  //1.YOL -> blogCard: any[]
  //2.YOL -> blogcard:BlogCard[]

  businesscard:BusinessCard[]=[{
    id:1, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!", icon:"fa-solid fa-bolt text-primary",
  },
  {
    id:2, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!",icon:"fa-solid fa-mug-hot text-danger",
  },
  {
    id:3, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!",icon:"fa-solid fa-pencil",
  },
  {
    id:4, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!",icon:"fa-solid fa-pencil",
  },
  {
    id:5, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!",icon:"fa-solid fa-mug-hot text-danger",
  },
  {
    id:6, title:"Frontend", text:"Frontend Loremsed nam excepturi at voluptatem, unde, atque sunt expedita fuga recusandae facere provident, illo quibusdam nihil quod culpa deserunt quos a reprehenderit est sequi blanditiis dolorum? Sed!",icon:"fa-solid fa-bolt text-primary",
  },];

  blogcard:BlogCard[]=[{
    id:1, title:"Title-1",text:"Text-1", description:"Açıklama-1", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme1/',
  },
  {
    id:2, title:"Title-2",text:"Text-2", description:"Açıklama-2", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",  date:String(new Date().getFullYear()), link: 'https://deneme2/',
  },
  {
    id:3, title:"Title-3",text:"Text-3", description:"Açıklama-3", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",  date:String(new Date().getFullYear()), link: 'https://deneme3/',
  },
  {
    id:4, title:"Title-4",text:"Text-4", description:"Açıklama-4", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme4/',
  },
  {
    id:5, title:"Title-5",text:"Text-5", description:"Açıklama-5", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme5/',
  },
  {
    id:6, title:"Title-6",text:"Text-6", description:"Açıklama-6", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme6/',
  },
  {
    id:7, title:"Title-7",text:"Text-7", description:"Açıklama-7", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme7/',
  },
  {
    id:8, title:"Title-8",text:"Text-8", description:"Açıklama-8", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()), link: 'https://deneme8/',
  }];
}
