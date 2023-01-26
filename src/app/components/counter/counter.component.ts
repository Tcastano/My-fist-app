import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 contadorId=Math.floor(Math.random()*10);
 estador="true";

 getEstado(){
  return this.estador;
 }
}
