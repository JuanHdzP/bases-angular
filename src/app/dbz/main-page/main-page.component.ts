import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Hola',
    poder: 151515,
  };

  constructor(){
    }

  /* nuevo: Personaje={
    nombre: '',
    poder: 0,
  }

  agregar(){
    if (this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo);
    
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre: "",
      poder: 0,
    }
    } */

  /* cambiarNombre(event:any){
      console.log(event.target.value)
    } */
}
