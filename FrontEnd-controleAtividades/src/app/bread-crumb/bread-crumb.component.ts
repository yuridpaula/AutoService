
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  private static breads: any;
  public bread: any;
  public header: string;

  constructor() { }

  ngOnInit() {
    //this.bread = BreadCrumbComponent.breads;
    this.bread = [{'nome': 'HOME'      , 'link': '/home'}, 
    {'nome': 'INTEGRANTE', 'link': '/integrante'}, 
    {'nome': 'CADASTRO'  , 'link': '/integrante/novo'}];
    this.header = 'Exemplo de Header'
  }

  public setBreads(data: any){
    BreadCrumbComponent.breads = data;
  }

  public setHeader(data: string){
    this.header = data;
  }

}
