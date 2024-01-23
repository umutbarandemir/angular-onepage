import { UserRegisterService } from './../services/user-register.service';
import { AlertifyMessageService } from './../services/alertify-message.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserRegister } from './UserRegister';

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
  }
  
}
