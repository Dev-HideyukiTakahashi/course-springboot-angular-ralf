import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Variavel para visibilidade dos botões
  btnCadastro:boolean = true;

  // JSON de clientes
  clientes:Cliente[] = [];

  // Construtor para acesso ao cliente service para acesso as métodos
  constructor(private servico:ClienteService){

  }

  // Método para selecionar clientes
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }
}
