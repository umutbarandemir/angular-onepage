import { UserRegisterService } from './../services/user-register.service';
import { AlertifyMessageService } from './../services/alertify-message.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserRegister } from './UserRegister';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{


  userlist:UserRegister[] = new Array<UserRegister>();

  usercreate: UserRegister = new UserRegister();

  constructor(private AlertifyMessageService:AlertifyMessageService,private UserRegisterService:UserRegisterService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.AlertifyMessageService.alertMessage("Register Page");
    this.UserRegisterService.userListRegisterObservable().subscribe((response)=>{
      this.userlist = response;
      console.log(response);
      // this.AlertifyMessageService.alertMessage(JSON.stringify(response));
    })
  }

  registerCreate(form:NgForm){
    const formData = form.value.username+ " "+ form.value.email+" "+form.value.password;
    this.AlertifyMessageService.alertSuccess(formData);

    this.UserRegisterService.createListRegisterObservable(this.usercreate).subscribe(response=>{
      this.AlertifyMessageService.alertSuccess(form+" Added.");
      form.reset();
    })
  }
  
}
