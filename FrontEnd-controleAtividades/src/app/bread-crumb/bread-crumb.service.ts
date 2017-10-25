import { Injectable } from '@angular/core';
import { BreadCrumbComponent } from "./bread-crumb.component";

@Injectable()
export class BreadCrumbService {

  public breads: BreadCrumbComponent;

  constructor() { }

  public setBreads(dados: any){
    this.breads = dados;
  }

  public getBreads(){
    return this.breads;
  }

}
