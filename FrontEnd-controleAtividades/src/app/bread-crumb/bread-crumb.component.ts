
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  private static breads: any;
  public bread: any;

  constructor() { }

  ngOnInit() {
    //this.bread = BreadCrumbComponent.breads;
    /*this.bread = [{'nome': 'HOME'      , 'link': '/home'}, 
    {'nome': 'INTEGRANTE', 'link': '/intregrante'}, 
    {'nome': 'CADASTRO'  , 'link': '/integrante/novo'}];*/
  }

  public setBreads(data: any){
    BreadCrumbComponent.breads = data;
  }

}
