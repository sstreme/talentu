import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  userData = {
    nombre:'',
    email: '',
    telefono: 0,
    mensaje: ''
  }

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.userData);
    
  }

}
