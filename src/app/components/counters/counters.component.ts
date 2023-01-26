import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent {
  permitirAnadir=false;
  contadorEstado="No ha sido creado el contador";
  nombreContador="Hugo";

  counters =['Array Posicion 1','Array Posicion 2'];
  constructor(){

    setTimeout(()=>{
    this.permitirAnadir=true;
    console.log(this.permitirAnadir);
  },3000);

}
onCreateCounters(){
this.contadorEstado="Contador creado " + this.nombreContador;

this.counters.push(this.nombreContador)
}



// onUpdateCounterName(event:any){
//   console.log(event.target.value);
//   this.nombreContador=event?.target.value;
  
// }
}
