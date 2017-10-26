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
  
  private titulo = 'Lista de Integrantes'
  integrantes: any;
  
  constructor(private integranteService: IntegranteService, private bd: BreadCrumbComponent) {  }

  ngOnInit() {
    this.bd.setBreads([{'nome': 'HOME'      , 'link': '/home'}, 
                       {'nome': 'INTEGRANTE', 'link': '/integrante'}, 
                       {'nome': 'CADASTRO'  , 'link': '/integrante/novo'}]);
    this.bd.setHeader('Lista de Integrantes');

    this.integranteService.listarTodos().subscribe(data=>
      this.integrantes = data);
}

}
