import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
   
  novoContato:Contato = {
    nome:'',
    email:'',
    telefones:['']
  }

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  cancelar():void {
    console.log('Pediu para cancelar');
    this.onCancelarClick.emit()
  }

  track(index:number, value:string){
    return index;
  }

  addTelefone():void{
    this.novoContato.telefones.push('');
  }

  ngOnInit(): void {
  }

}
