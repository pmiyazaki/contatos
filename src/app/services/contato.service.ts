import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
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
      telefones:['9999-9999', '9999-9999'],
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

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = 'CONTATOS';

  constructor() {
    
    //Carregando informações do localStorage na chave CONTATOS
    let dados = window.localStorage.getItem(this.chave)
    
    //Verificando se as informações existem
    if(dados){
      //Existe: transformando dados em array e guardando em baseDeContatos
      this.baseDeContatos = JSON.parse(dados);
    
    } else {
      
      //Não existe: Pões uma string json com array vazio no localStorage
      window.localStorage.setItem(this.chave, '[]');
      
      //Colocando um array vazio no atributo baseDeContatos
      this.baseDeContatos = [];
    }
  }

  getContatos():Contato[] {
    return this.baseDeContatos;
  }

  //receber um contato, adicionar o contato BASE_DE_CONTATOS e retornar nada.
  addContato(c:Contato):void {
    this.baseDeContatos.push(c);
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  }

}
