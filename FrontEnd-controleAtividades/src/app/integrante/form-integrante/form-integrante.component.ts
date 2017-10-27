import { Component, OnInit } from '@angular/core';
import { IntegranteService, Integrante } from "../integrante.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumbComponent } from "../../bread-crumb/bread-crumb.component";


@Component({
  selector: 'app-form-integrante',
  templateUrl: './form-integrante.component.html',
  styleUrls: ['./form-integrante.component.css'],
  providers: [IntegranteService]
})
export class FormIntegranteComponent implements OnInit {

  private model : Integrante = new Integrante()
  private id : string


  constructor(
    private service: IntegranteService,
    private router: Router,
    private route: ActivatedRoute,
    private bd: BreadCrumbComponent

  ) { }

  ngOnInit() {
    this.bd.setBreads([{'nome': 'HOME'      , 'link': '/home'}, 
                       {'nome': 'INTEGRANTE', 'link': '/integrante'}, 
                       {'nome': 'CADASTRO'  , 'link': '/novo'}]);
    this.bd.setHeader('Cadastro de Integrantes');
    
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
            (existente: Integrante) => this.model = existente
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
        roteador.navigate(['/integrante'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}
