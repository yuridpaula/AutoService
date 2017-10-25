import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProdutoComponent }        from './produto/produto.component';
import { HomeComponent }           from './home/home.component';
import { IntegranteComponent }     from './integrante/integrante.component';
import { CabMovimentoComponent }   from "./cab-movimento/cab-movimento.component";
import { ItemMovimentoComponent }  from "./item-movimento/item-movimento.component";
import { FormIntegranteComponent } from "./integrante/form-integrante/form-integrante.component";

const routes: Routes = [
    { path: ''               , redirectTo: '/home', pathMatch: 'full'},
    { path: 'home'           , component: HomeComponent},
    { path: 'produto'        , component: ProdutoComponent},
    { path: 'integrante'     , component: IntegranteComponent},
    { path: 'movimento'      , component: CabMovimentoComponent},
    { path: 'item_movimento' , component: ItemMovimentoComponent},
    { path: 'integrante/novo', component: FormIntegranteComponent},
    { path: 'integrante/:id' , component: FormIntegranteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}