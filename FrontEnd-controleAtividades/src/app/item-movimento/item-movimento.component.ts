import { Component, OnInit } from '@angular/core';
import { ItemMovimentoService } from './item-movimento.service';

@Component({
  selector: 'app-item-movimento',
  templateUrl: './item-movimento.component.html',
  styleUrls: ['./item-movimento.component.css']
})
export class ItemMovimentoComponent implements OnInit {
  movimentos: any;
  constructor(private itemMovimentoService: ItemMovimentoService) { }

  ngOnInit() {
    this.itemMovimentoService.listarTodos().subscribe(data=>{
      this.movimentos = data;
        });
  } 
} 
