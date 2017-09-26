import { Component, OnInit } from '@angular/core';
import { MovimentoService } from './movimento.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class MovimentoComponent implements OnInit {
  movimentos: any;
  constructor(private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.movimentoService.listarTodos().subscribe(data=>{
      this.movimentos = data;
        });
  }
}

