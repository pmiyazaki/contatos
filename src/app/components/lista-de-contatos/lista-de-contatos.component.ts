import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['1111-1111'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['2222-2222'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['3333-3333'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['4444-4444'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['5555-5555'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['6666-6666'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['7777-7777'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['8888-8888'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['9999-9999'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['1010-1010'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['1212-1212'],
    },
    { nome:'Patricia Miyazaki',
      email: 'pmiyazakii@gmail.com',
      telefones:['1313-1313'],
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
