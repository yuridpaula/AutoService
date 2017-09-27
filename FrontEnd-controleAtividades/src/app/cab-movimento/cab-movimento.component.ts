import { Component, OnInit } from '@angular/core';
import { CabMovimentoService } from './cab-movimento.service';

@Component({
  selector: 'app-cab-movimento',
  templateUrl: './cab-movimento.component.html',
  styleUrls: ['./cab-movimento.component.css']
})
export class CabMovimentoComponent implements OnInit {
  movimentos: any;
  constructor(private cabMovimentoService: CabMovimentoService) { }

  ngOnInit() {
    this.cabMovimentoService.listarTodos().subscribe(data=>{
      this.movimentos = data;
        });
  } 
} 

