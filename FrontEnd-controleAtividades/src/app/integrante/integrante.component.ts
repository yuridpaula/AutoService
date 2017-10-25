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
  breads: BreadCrumbComponent;
  
  constructor(private integranteService: IntegranteService) { }

  ngOnInit() {
    this.integranteService.listarTodos().subscribe(data=>
      this.integrantes = data)
}
  

    private newFunction() {
        this.breads.setBreads([{ 'nome': 'HOME', 'link': '/home' },
        { 'nome': 'INTEGRANTE', 'link': '/intregrante' },
        { 'nome': 'CADASTRO', 'link': '/integrante/novo' }]);
    }
}
