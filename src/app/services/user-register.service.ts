import { AlertifyMessageService } from './alertify-message.service';
// CORE
import { Injectable, OnInit } from '@angular/core';

// Api icin
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

// RxJS
import { Observable, catchError, tap, throwError } from 'rxjs';

// UserRegister
import { UserRegister } from '../register/UserRegister';

// Servis icin
@Injectable({
  providedIn: 'root',
})

// Export
export class UserRegisterService implements OnInit {
  // Field
  // Api Path
  path: string = 'http://localhost:2222/user';

  // Constructor
  /*
  app.component.ts
   imports: [
    HttpClientModule, // Api istekleri icin
  ],
  */
  // Api istegi icin: httpClient
  constructor(
    private httpClient: HttpClient,
    private alertifyMessageService: AlertifyMessageService
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

    //serviste sadece observable nesnesinin bir instanceı yapılmalı. Subscribe ilgili .ts dosyasından
  //api list
  //Observable dönecek ve türü UserRegister olacaktır.
  userListRegisterObservable(): Observable<UserRegister[]> {
    this.alertifyMessageService.alertSuccess('User List Success');
    //liste
    return this.httpClient.get<UserRegister[]>(this.path).pipe(
      tap((response) => {
        console.log(response);
        console.log(JSON.stringify(response));
      }),
      catchError(this.observableUserRegisterCatchErrorHandling)
    );
  } //end User Register List Api

  createListRegisterObservable(UserRegister:UserRegister): Observable<UserRegister> {

      const headerHttpOptions={
        headers:new HttpHeaders({
          "Content-Type":"application/json",
        })
      }

    return this.httpClient.post<UserRegister>(this.path,UserRegister).pipe(
      tap((response) => {
        console.log(response);
        console.log(JSON.stringify(response));
      }),
      catchError(this.observableUserRegisterCatchErrorHandling)
    );
  }

  // Error Handling
  observableUserRegisterCatchErrorHandling(err: HttpErrorResponse) {
    //throw new Error('Function not implemented.');
    let httpErrorData = '';
    if (err.error instanceof ErrorEvent) {
      httpErrorData = 'Genel Bir Hatamız var' + err.error.message;
      this.alertifyMessageService.alertError(httpErrorData);
    } else {
      httpErrorData =
        "Json-server veya NodeJs'den veri gelmiyor ne yaptında gelmiyor :) ";
      this.alertifyMessageService.alertError(httpErrorData);
    }
    return throwError(httpErrorData);
  }
} //end UserRegisterService