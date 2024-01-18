import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-page-blog-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './one-page-blog-page.component.html',
  styleUrl: './one-page-blog-page.component.css'
})
export class OnePageBlogPageComponent {

}
