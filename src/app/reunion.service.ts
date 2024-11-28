import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  constructor() { }
  
  funcionalidad(){
    return "Hola desde el servicio desde componente app";
  }
  funcionalidad1(){
    return "Hola desde el servicio llamado desde componente reunion"
  }
}
