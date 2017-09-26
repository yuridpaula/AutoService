import { Component, OnInit } from '@angular/core';
import { IntegranteService } from './integrante.service';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {
  integrantes: any;
  constructor(private integranteService: IntegranteService) { }

  ngOnInit() {
    this.integranteService.listarTodos().subscribe(data=>{
      this.integrantes = data;
        });
  }
}
