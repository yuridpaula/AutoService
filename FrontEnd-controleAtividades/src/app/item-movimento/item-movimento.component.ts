import { Component, OnInit } from '@angular/core';
import { ItemMovimentoService } from './item-movimento.service';

@Component({
  selector: 'app-item-movimento',
  templateUrl: './item-movimento.component.html',
  styleUrls: ['./item-movimento.component.css'],
  providers: [ItemMovimentoService]
})
export class ItemMovimentoComponent implements OnInit {
  private static id_cab_movimento: string;
  movimentos: any;

  constructor(private itemMovimentoService: ItemMovimentoService) { }

  ngOnInit() {
    // this.atualizaLista();
    this.getItemMovimento();
  }

  // public atualizaLista(){
  //   if(ItemMovimentoComponent.id_cab_movimento){
  //     this.itemMovimentoService.listarTodosPorCabMovimento(ItemMovimentoComponent.id_cab_movimento).subscribe(data=>{
  //       console.log(data);
  //       this.movimentos = data;
  //     });
  //   }
  // }

  public getItemMovimento() {
    this.itemMovimentoService.listarTodos().subscribe(data => {
      this.movimentos = data;
    })
  }

  public setIdCabMovimento(id: string){
    ItemMovimentoComponent.id_cab_movimento = id;
  }

  public getIdCabMovimento(){
    return ItemMovimentoComponent.id_cab_movimento;
  }

  public apagar(id: string){
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.itemMovimentoService.apagar(id).subscribe(
        () => this.getItemMovimento(),
        erro => console.error(erro)
      )
    }
  }
} 
