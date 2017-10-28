import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

export class Produto{
  public _id: string;
  public descricao: string;
  public valor_venda_sugerido: number;
  public estoque_atual: number;
}

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public listarTodos(){
    return this.http.get(environment.urlApi + '/produtos');
  }

  public salvar(dados: Produto){
    //produto já existe
    if(dados._id){
      return this.http.put(environment.urlApi + '/produtos', dados)
    }

    //produto novo
    else {
      return this.http.post(environment.urlApi + '/produtos', dados)
    }
  }

  public obterPorId(id: string){
    return this.http.get(environment.urlApi + '/produtos/' + id)
  }

  public apagar(id: string){
    return this.http.delete(environment.urlApi + '/produtos/' + id)
  }
}
