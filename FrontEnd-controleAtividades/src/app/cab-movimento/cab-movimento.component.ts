import { Component, OnInit } from '@angular/core';
import { CabMovimentoService } from './cab-movimento.service';
import { BreadCrumbComponent } from "../bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-cab-movimento',
  templateUrl: './cab-movimento.component.html',
  styleUrls: ['./cab-movimento.component.css'],
  providers: [CabMovimentoService]
})
export class CabMovimentoComponent implements OnInit {
  
  movimentos: any;
  
  constructor(
    private cabMovimentoService: CabMovimentoService,
    private bd: BreadCrumbComponent) { }

  ngOnInit() {
    this.load();
  } 

  public load(){
    this.bd.setBreads([{'nome': 'HOME'      , 'link': '/home'},
                       {'nome': 'MOVIMENTOS', 'link': '/movimentos'}]);
    this.bd.setHeader('Lista de Movimentos Cadastrados');

    this.cabMovimentoService.listarTodos().subscribe(data=>{
      this.movimentos = data;
        });
  }

  public apagar(id: string){
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.cabMovimentoService.apagar(id).subscribe(
        () => this.load(),
        erro => console.error(erro)
      )
    }
  }
} 

