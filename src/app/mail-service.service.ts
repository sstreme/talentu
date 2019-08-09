import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private _http: HttpClient) { }
  enviarCorreo(datos){
    return this._http.post('http://localhost:3000/contacto',datos);
  }
}
