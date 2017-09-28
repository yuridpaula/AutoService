import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './inicio/app.component';

import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { CabMovimentoComponent } from './cab-movimento/cab-movimento.component';
import { ItemMovimentoComponent } from './item-movimento/item-movimento.component';

import { AppRoutingModule } from './app-routing.module';

import { ProdutoService } from "./produto/produto.service";
import { IntegranteService } from "./integrante/integrante.service";
import { CabMovimentoService } from './cab-movimento/cab-movimento.service';
import { ItemMovimentoService } from './item-movimento/item-movimento.service';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    IntegranteComponent,
    CabMovimentoComponent,
    ItemMovimentoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [ProdutoService, CabMovimentoService, IntegranteService, ItemMovimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
