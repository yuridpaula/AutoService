import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './inicio/app.component';

import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { MovimentoComponent } from './movimento/movimento.component';

import { AppRoutingModule } from './app-routing.module';

import { ProdutoService } from "./produto/produto.service";
import { IntegranteService } from "./integrante/integrante.service";
import { MovimentoService } from "./movimento/movimento.service";
import { CabMovimentoComponent } from './cab-movimento/cab-movimento.component';
import { ItemMovimentoComponent } from './item-movimento/item-movimento.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    IntegranteComponent,
    MovimentoComponent,
    CabMovimentoComponent,
    ItemMovimentoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [ProdutoService, MovimentoService, IntegranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
