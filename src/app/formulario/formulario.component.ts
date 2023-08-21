import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Input() btnEnviar!: String;

  formulario!: FormGroup;

  ngOnInit() : void{
    this.formulario = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl('')
    })
  }

    get nome(){
      return this.formulario.get('nome')!;
    }

    get telefone(){
      return this.formulario.get('telefone')!;
    }

    get email(){
      return this.formulario.get('email')!;
    }


    submit(){

      
      console.log("Formulário Enviado!");
    }




 

}
