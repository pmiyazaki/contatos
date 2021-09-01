import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
 
  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome:'',
    email:'',
    telefones:['']
  }

  cs:ContatoService = new ContatoService();

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

  removeTelefone(pos:number):void{
    this.novoContato.telefones.splice(pos,1)
  }

  salvar() {
    this.cs.addContato(this.novoContato);
    
    //Se quiser fazer  tela sumir
    this.onCancelarClick.emit();

    //Manter a tela e limpar os campos para a adição de um novo contatos
    //this.novoContato = {
    //nome:'',
    //  email:'',
    //  telefones:['']
    //}
  }

  ngOnInit(): void {
  }



}
