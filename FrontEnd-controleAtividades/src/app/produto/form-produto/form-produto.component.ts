import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from "../produto.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumbComponent } from "../../bread-crumb/bread-crumb.component";


@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css'],
  providers: [ProdutoService]
})
export class FormProdutoComponent implements OnInit {

  private model: Produto = new Produto()
  private id: string


  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private bd: BreadCrumbComponent
  ) { }

  ngOnInit() {  
    this.bd.setBreads([{'nome': 'HOME'    , 'link': '/home'},
                       {'nome': 'PRODUTOS', 'link': '/produtos'},
                       {'nome': 'CADASTRO', 'link': '/produtos/novo'}]);
    this.bd.setHeader('Cadastro de Produtos');

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
      if(params['id']) { 
        console.log('entrou no if');
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.service.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Produto) => this.model = existente
          )
        }
      }
    )

  }

  enviar() {
    // Preservando o roteador para evitar a perda de referência ao objeto
    let roteador = this.router

    this.service.salvar(this.model).subscribe(
      function () {
        roteador.navigate(['/produtos'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }

}
