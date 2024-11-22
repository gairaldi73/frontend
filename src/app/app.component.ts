import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReunionService } from './reunion.service';
import { ReunionComponent } from './reunion/reunion.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  //imports: [CommonModule, RouterOutlet, ReunionComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],        
})
export class AppComponent implements OnInit{
  title = 'Agenda de reuniones';
  service: ReunionService;
  
  constructor(){
    this.service = new ReunionService();
  }
  ngOnInit(): void {
    
  }
  getValor(){
    return this.service.funcionalidad();
  }
}
  /*colores = ['rojo', 'verde', 'azul'];
  indice = 0;
  valor = this.colores[this.indice];
  
  currentReunion = 'DESARROLLO';
  reunion: Reunion | undefined;

  cambiarColor(){
    this.valor = this.colores[++this.indice % this.colores.length];
    this.reunion?.setNombre("TESTING");
    console.log(this.reunion?.setNombre("TESTING"));
  }*/

