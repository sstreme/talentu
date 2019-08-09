import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private _http: HttpClient) { }
  enviarCorreo(datos){
    return this._http.post('https://talentu-mail.herokuapp.com/contacto',datos);
  }
}
