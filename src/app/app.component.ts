import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';

@Component({
  //html tagi oluşturmak
  selector: 'app-root',
  //componentı tek kullanmaya olanak sunar
  standalone: true,
  //eğer component veya module ekliyorsam buraya eklemeliyim
  imports: [CommonModule, RouterOutlet,OnepageFooterComponent,OnepageHeaderComponent,OnepageMainComponent],
  //bu componentın html dosyası
  templateUrl: './app.component.html',
  //bu componentın css dosyası
  styleUrl: './app.component.css'
})
//diğer dosyalarda bu componentı çekerken kullanılacak tag
export class AppComponent {
  title = 'angular-onepage';
  name="Umut Baran";
  surname="Demir";
  projectName = 'Angular-OnePage';
}
