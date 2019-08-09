import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  userData = {
    nombre: '',
    email: '',
    mensaje: ''
  }

  constructor(private _mail: MailServiceService) { }

  ngOnInit() {
  }

  enviar(contacto: NgForm) {
    this._mail.enviarCorreo(this.userData).subscribe(
      res => {
        console.log('Se ha enviado correo');
        contacto.resetForm();
      }
    )
  }

}
