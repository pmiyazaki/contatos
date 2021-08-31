import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onAddContatoClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick(){
    console.log('Cliquei para abrir o modal');
    this.onAddContatoClick.emit();
  }

}
