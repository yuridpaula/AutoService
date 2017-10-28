import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { BreadCrumbComponent } from "../bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: any;
  constructor(
    private produtoService: ProdutoService, 
    private bd: BreadCrumbComponent) { }

  ngOnInit() {
    this.bd.setBreads([{'nome': 'HOME', 'link': '/home'},
                       {'nome': 'PRODUTOS', 'link': '/produtos'}]);
    this.bd.setHeader('Lista de Produtos Cadastrados');
    
    this.atualizaLista();
  }

  private atualizaLista(){
    this.produtoService.listarTodos().subscribe(data=>{
      this.produtos = data;
        });
  }

  apagar(id: string){
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.produtoService.apagar(id).subscribe(
        () => this.atualizaLista(),
        erro => console.error(erro)
      )
    }
  }
}
