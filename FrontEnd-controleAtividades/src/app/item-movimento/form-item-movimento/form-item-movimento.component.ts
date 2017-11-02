import { Component, OnInit } from '@angular/core';
import { Item_movimento, ItemMovimentoService } from "../item-movimento.service";
import { BreadCrumbComponent } from "../../bread-crumb/bread-crumb.component";
import { ItemMovimentoComponent } from "../item-movimento.component";

@Component({
  selector: 'app-form-item-movimento',
  templateUrl: './form-item-movimento.component.html',
  styleUrls: ['./form-item-movimento.component.css'],
  providers: [ItemMovimentoService, ItemMovimentoComponent]
})
export class FormItemMovimentoComponent implements OnInit {
private idCabMovimento: string;

  constructor(
    private bd: BreadCrumbComponent,
    private imcComponent: ItemMovimentoComponent
  ) { }

  ngOnInit() {
    this.load();
  }

  public load(){
    this.bd.setHeader('Cadastro de Itens do Movimento');
    this.bd.setBreads([{'nome': 'HOME'              , 'link': '/home'},
                       {'nome': 'MOVIMENTOS'        , 'link': '/movimentos'},
                       {'nome': 'CADASTRO CABECALHO', 'link': '/movimentos/novo'},
                       {'nome': 'CADASTRO ITEM'     , 'link': '/movimentos/item/novo'}]);
  
    this.idCabMovimento = this.imcComponent.getIdCabMovimento();
    
    }


}
