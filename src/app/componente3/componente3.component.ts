import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  nota1: any;
  nota2: any;
  media: any;

  calcular(){
    this.media = (Number(this.nota1) + Number(this.nota2))/2;
  }
}
