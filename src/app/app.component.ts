import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,OnepageFooterComponent,OnepageHeaderComponent,OnepageMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-onepage';
  name="Umut Baran";
  surname="Demir";
  projectName = 'Angular-OnePage';
}
