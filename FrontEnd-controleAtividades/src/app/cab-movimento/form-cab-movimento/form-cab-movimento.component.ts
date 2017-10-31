import { Component, OnInit } from '@angular/core';
import { BreadCrumbComponent } from "../../bread-crumb/bread-crumb.component";
import { Cab_movimento, CabMovimentoService } from "../cab-movimento.service";
import { Integrante, IntegranteService } from "../../integrante/integrante.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-cab-movimento',
  templateUrl: './form-cab-movimento.component.html',
  styleUrls: ['./form-cab-movimento.component.css'],
  providers: [CabMovimentoService, IntegranteService]
})
export class FormCabMovimentoComponent implements OnInit {

  private model: Cab_movimento = new Cab_movimento();
  private integrantes: any;
  private id: string;

  constructor(
    private bd: BreadCrumbComponent,
    private movService: CabMovimentoService,
    private intService: IntegranteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.load();

    this.carregaIntegrantes();

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
      if(params['id']) { 
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.movService.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Cab_movimento) => this.model = existente
          )
        }
      }
    )
  }

  public load(){
    this.bd.setBreads([{'nome': 'HOME'      , 'link': '/home'},
                       {'nome': 'MOVIMENTOS', 'link': '/movimentos'},
                       {'nome': 'CADASTRO'  , 'link': 'movimentos/novo'}]);
    this.bd.setHeader('Cadastro de Movimentos');
  }


  enviar() {
    // Preservando o roteador para evitar a perda de referência ao objeto
    let roteador = this.router
    
    this.movService.salvar(this.model).subscribe(
      function () {
        console.log('tem que passar aqui, esta parando em algum lugar');
        roteador.navigate(['/movimentos']);
      },
      function(erro){
        console.log('entrou no erro');
        console.error(erro);
      }
    )
  }

  public carregaIntegrantes(){
    this.integrantes = this.intService.listarTodos();
  }
}
