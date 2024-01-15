import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCard } from './BlogCard';

@Component({
  selector: 'app-onepage-main',
  standalone: true,
  //*ngFor fonksiyonunun çalışması için bu CommonModule importlanmalı
  imports: [CommonModule],
  templateUrl: './onepage-main.component.html',
  styleUrl: './onepage-main.component.css'
})
export class OnepageMainComponent {
  /* 
                      <div class="col-sm-12 col-md-3 col-lg-4 col-3">
                        <div class="card">
                            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Text</p>
                            </div>
                        </div>
                    </div>
  */
  //1.YOL -> blogCard: any[]
  //2.YOL -> blogcard:BlogCard[]
  blogcard:BlogCard[]=[{
    id:1, title:"Title-1",text:"Text-1", description:"Açıklama-1", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()),
  },
  {
    id:2, title:"Title-2",text:"Text-2", description:"Açıklama-2", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",  date:String(new Date().getFullYear()),
  },
  {
    id:3, title:"Title-3",text:"Text-3", description:"Açıklama-3", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg",  date:String(new Date().getFullYear()),
  },
  {
    id:4, title:"Title-4",text:"Text-4", description:"Açıklama-4", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()),
  },
  {
    id:5, title:"Title-5",text:"Text-5", description:"Açıklama-5", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()),
  },
  {
    id:6, title:"Title-6",text:"Text-6", description:"Açıklama-6", picture:"https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg", date:String(new Date().getFullYear()),
  }];
}
