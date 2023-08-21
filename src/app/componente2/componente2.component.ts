import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {

  produtos = {
    descricao: 'Sandália',
    valorunit: '90.00',
    valorvenda: '220.00',
    quantidade: '40'
  }

}
