import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

// classe que representa  o model no front

export class Item_movimento {
  public _id: string;
  public cab_movimento: string;
  public produto: string;
  public quantidade: string;
  public valor_pago: number;
  public data_movimento: string;
  public data_pagamento: string;
  public pago: boolean;
}

@Injectable()
export class ItemMovimentoService {

  constructor(private http: HttpClient) { 

  }

  listarTodos(){
    return this.http.get(environment.urlApi + '/movimento_itens');
  }

  listarTodosPorCabMovimento(id: string){
    return this.http.get(environment.urlApi + '/movimento_itens/itens/' + id)
  }

  public salvar(dados: Item_movimento){
    //integrante já existe
    if(dados._id){
      return this.http.put(environment.urlApi + '/movimento_itens', dados);
    }
    //recurso novo
    else {
      return this.http.post(environment.urlApi + '/movimento_itens', dados)
    }
  }

  public obterPorId(id: string){
    console.log('dentro do obter por id: ' + id);
    let data =  this.http.get(environment.urlApi + '/movimento_itens/' + id);
    console.log(data);
    return data;
  }

  //ok
  public apagar(id: string){
    return this.http.delete(environment.urlApi + '/movimento_itens/' + id)
  }
}