import { Injectable } from '@angular/core';

//Alertify
declare let alertify:any;

//Bu injectable içinde providedIn: 'root' olursa global, boş olursa local
@Injectable({
  providedIn: 'root'
})

export class AlertifyMessageService {

  constructor() { }

  alertSuccess(message:string){
    alertify.success(message);
  }

  alertWarning(message:string){
    alertify.warning(message);
  }

  alertMessage(message:string){
    alertify.message(message);
  }

  alertError(message:string){
    alertify.error(message);
  }
}
