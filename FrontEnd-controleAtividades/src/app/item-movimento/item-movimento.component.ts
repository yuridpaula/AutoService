import { Component, OnInit } from '@angular/core';
import { ItemMovimentoService } from './item-movimento.service';

@Component({
  selector: 'app-item-movimento',
  templateUrl: './cab-movimento.component.html',
  styleUrls: ['./cab-movimento.component.css']
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
