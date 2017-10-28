import { Component, OnInit } from '@angular/core';

import { IntegranteService } from './integrante.service';
import { BreadCrumbComponent } from "../bread-crumb/bread-crumb.component";
@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css'],
  providers: [IntegranteService]
})
export class IntegranteComponent implements OnInit {
  
  integrantes: any;
  
  constructor(
    private integranteService: IntegranteService, 
    private bd: BreadCrumbComponent) {  }

  ngOnInit() {
    this.bd.setBreads([{'nome': 'HOME'       , 'link': '/home'}, 
                       {'nome': 'INTEGRANTES', 'link': '/integrantes'}]);
    this.bd.setHeader('Lista de Integrantes Cadastrados');

    this.atualizaLista();
}
  apagar(id: string){
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.integranteService.apagar(id).subscribe(
        () => this.atualizaLista(),
        erro => console.error(erro)
      )
    }
  }

  private atualizaLista() {
    this.integranteService.listarTodos().subscribe(data => this.integrantes = data);
  }
}
