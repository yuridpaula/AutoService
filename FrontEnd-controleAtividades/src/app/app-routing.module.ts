import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { MovimentoComponent } from './movimento/movimento.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'integrante', component: IntegranteComponent},
    { path: 'movimento', component: MovimentoComponent}   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}