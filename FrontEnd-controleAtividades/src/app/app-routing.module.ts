import { NgModule }                   from '@angular/core';
import { RouterModule, Routes}        from '@angular/router';

import { ProdutoComponent }           from './produto/produto.component';
import { HomeComponent }              from './home/home.component';
import { IntegranteComponent }        from './integrante/integrante.component';
import { CabMovimentoComponent }      from "./cab-movimento/cab-movimento.component";
import { ItemMovimentoComponent }     from "./item-movimento/item-movimento.component";
import { FormIntegranteComponent }    from "./integrante/form-integrante/form-integrante.component";
import { FormProdutoComponent }       from "./produto/form-produto/form-produto.component";
import { FormCabMovimentoComponent }  from "./cab-movimento/form-cab-movimento/form-cab-movimento.component";
import { FormItemMovimentoComponent } from "./item-movimento/form-item-movimento/form-item-movimento.component";

const routes: Routes = [
    { path: ''                    , redirectTo: '/home', pathMatch: 'full'},
    { path: 'home'                , component: HomeComponent},
    { path: 'produtos'            , component: ProdutoComponent},
    { path: 'integrantes'         , component: IntegranteComponent},
    { path: 'movimentos'          , component: CabMovimentoComponent},
    { path: 'movimento_itens'     , component: ItemMovimentoComponent},
    { path: 'integrantes/novo'    , component: FormIntegranteComponent},
    { path: 'integrantes/:id'     , component: FormIntegranteComponent},
    { path: 'produtos/novo'       , component: FormProdutoComponent},
    { path: 'produtos/:id'        , component: FormProdutoComponent},
    { path: 'movimentos/novo'     , component: FormCabMovimentoComponent},
    { path: 'movimentos/:id'      , component: FormCabMovimentoComponent},
    { path: 'movimentos/item/novo', component: FormItemMovimentoComponent},
    { path: 'movimentos/item/:id' , component: FormItemMovimentoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}