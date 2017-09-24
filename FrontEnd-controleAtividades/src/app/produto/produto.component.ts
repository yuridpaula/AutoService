import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: any;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    //console.log(this.produtos)
    this.produtoService.listarTodos().subscribe(data=>{
      console.log(data);
      this.produtos = data;
        });
  }

}
