import { Component } from '@angular/core';

@Component({
  selector: 'app-onepage-footer',
  standalone: true,
  imports: [],
  templateUrl: './onepage-footer.component.html',
  styleUrl: './onepage-footer.component.css'
})
export class OnepageFooterComponent {
    currentYear:number;

    // ngOnInit(): void {
    //   const currentDate = new Date();
    //   this.currentYear = currentDate.getFullYear();
    // }

    constructor(){
      const currentDate = new Date();
      this.currentYear= currentDate.getFullYear();
    }


}
