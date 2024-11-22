import { Component, OnInit } from '@angular/core';
import { ReunionService } from '../reunion.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css'],
})
export class ReunionComponent implements OnInit {
  constructor(private service: ReunionService ){ }
  ngOnInit(): void { }
  getReuniones(){
    this.service.getReuniones();
  }
 
}
