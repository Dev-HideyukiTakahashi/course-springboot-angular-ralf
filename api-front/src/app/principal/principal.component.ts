import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  
  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botões
  btnCadastro:boolean = true;

  // Variavel para visibilidade da tabela
  tabela:boolean = true;

  // JSON de clientes
  clientes:Cliente[] = [];

  // Construtor para acesso ao cliente service para acesso as métodos
  constructor(public servico:ClienteService){

  }

  // Método para selecionar clientes
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  } 

  // Metodo de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      // Cadastrar o cliente no vetor
      this.clientes.push(retorno);

      // Limpar formulário
      this.cliente = new Cliente();

      // Mensagem
      alert("Cliente cadastrado com sucesso!");
    })
  }

  // Método para selecionar um cliente específico
  selecionarCliente(posicao:number):void{

    // Selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    // Visibilidade dos botões
    this.btnCadastro = false;

    // Visibilidade da tabela
    this.tabela = false;
  }

  // Método editar clientes
  editar():void{
    this.servico.editar(this.cliente)
    .subscribe(retorno => {
      
      // Obter posição do vetor onde está o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      // Limpar formulário
      this.cliente = new Cliente();

      // Alterar os dados do cliente no vetor
      this.clientes[posicao] = retorno;

      // Visibilidade dos botões
      this.btnCadastro = true;
      this.tabela = true;
      
      alert("Cliente atualizado com sucesso!");
    })
  }

  // Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
