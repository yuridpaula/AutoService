import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { HttpClientModule}           from '@angular/common/http';

import { AppComponent }              from './inicio/app.component';

import { ProdutoComponent }          from './produto/produto.component';
import { HomeComponent }             from './home/home.component';
import { IntegranteComponent }       from './integrante/integrante.component';
import { CabMovimentoComponent }     from './cab-movimento/cab-movimento.component';
import { ItemMovimentoComponent }    from './item-movimento/item-movimento.component';
import { BreadCrumbComponent }       from './bread-crumb/bread-crumb.component';

import { AppRoutingModule }          from './app-routing.module';
import { FormsModule }               from "@angular/forms";

import { ProdutoService }            from "./produto/produto.service";
import { IntegranteService }         from "./integrante/integrante.service";
import { CabMovimentoService }       from './cab-movimento/cab-movimento.service';
import { ItemMovimentoService }      from './item-movimento/item-movimento.service';

import { FormIntegranteComponent }   from './integrante/form-integrante/form-integrante.component';
import { FormProdutoComponent }      from './produto/form-produto/form-produto.component';
import { FormCabMovimentoComponent } from './cab-movimento/form-cab-movimento/form-cab-movimento.component';
import { FormItemMovimentoComponent } from './item-movimento/form-item-movimento/form-item-movimento.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    IntegranteComponent,
    CabMovimentoComponent,
    ItemMovimentoComponent,
    FormIntegranteComponent,
    BreadCrumbComponent,
    FormProdutoComponent,
    FormCabMovimentoComponent,
    FormItemMovimentoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [ProdutoService, CabMovimentoService, IntegranteService, ItemMovimentoService, BreadCrumbComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
