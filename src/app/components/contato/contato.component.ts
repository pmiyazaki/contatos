import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input() registro!:Contato;
  //@Input('a') registro!:Contato -> Ai teria que colocar o [a]="c" no listadecontato.html

  constructor() { }

  ngOnInit(): void {
  }

}
