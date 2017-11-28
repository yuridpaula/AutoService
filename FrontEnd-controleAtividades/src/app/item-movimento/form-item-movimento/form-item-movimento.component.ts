import { Component, OnInit }                    from '@angular/core';
import { Item_movimento, ItemMovimentoService } from "../item-movimento.service";
import { BreadCrumbComponent }                  from "../../bread-crumb/bread-crumb.component";
import { ItemMovimentoComponent }               from "../item-movimento.component";
import { ProdutoService }                       from "../../produto/produto.service";
import { Router, ActivatedRoute }               from "@angular/router";

@Component({
  selector: 'app-form-item-movimento',
  templateUrl: './form-item-movimento.component.html',
  styleUrls: ['./form-item-movimento.component.css'],
  providers: [ItemMovimentoService, ItemMovimentoComponent]
})
export class FormItemMovimentoComponent implements OnInit {
  private model: Item_movimento = new Item_movimento()
  private idCabMovimento: string;
  private produtos: any;
  private id: string;

  constructor(
    private bd: BreadCrumbComponent,
    private imcComponent: ItemMovimentoComponent,
    private service: ItemMovimentoService,
    private pService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.carregaProdutos();
    this.load();

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
      if(params['id']) { 
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.service.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Item_movimento) => { console.log(existente); this.model = existente }
          )
        }
      }
    )
  }

  public load(){
    this.bd.setHeader('Cadastro de Itens do Movimento');
    this.bd.setBreads([{'nome': 'HOME'              , 'link': '/home'},
                       {'nome': 'MOVIMENTOS'        , 'link': '/movimentos'},
                       {'nome': 'CADASTRO CABECALHO', 'link': '/movimentos/novo'},
                       {'nome': 'CADASTRO ITEM'     , 'link': '/movimentos/item/novo'}]);
  
    this.idCabMovimento = this.imcComponent.getIdCabMovimento();
    
  }

  public carregaProdutos(){
    this.pService.listarTodos().subscribe( data => {
      this.produtos = data;
    })
  }

  enviar() {
    // Preservando o roteador para evitar a perda de referência ao objeto
    let roteador = this.router
    this.service.salvar(this.model).subscribe(
      function () {
        roteador.navigate(['/movimento_itens'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }

  public apagar(id: string){
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.service.apagar(id).subscribe(
        () => this.load(),
        erro => console.error(erro)
      )
    }
  }
}
