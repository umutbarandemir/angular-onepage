import { Injectable } from '@angular/core';


//Bu injectable içinde providedIn: 'root' olursa global, boş olursa local
@Injectable({
  providedIn: 'root'
})
export class AlertifyMessageService {

  constructor() { }
}
