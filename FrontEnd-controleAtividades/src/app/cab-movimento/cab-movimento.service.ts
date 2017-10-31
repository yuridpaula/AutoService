import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

// classe que representa  o model no front

export class Cab_movimento {
  public _id: string;
  public integrante: string;
  public tipo: string;
  public documento: string;
}

@Injectable()
export class CabMovimentoService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get(environment.urlApi + '/movimentos');
  }

  public salvar(dados: Cab_movimento){
    //recurso existente
    if(dados._id){ 
      console.log('atualizando')
      return this.http.put(environment.urlApi + '/movimentos', dados)
    }
    //recurso novo
    else {
      console.log('novo')
      return this.http.post(environment.urlApi + '/movimentos', dados)  
    }
  }

  public obterPorId(id: string){
    return this.http.get(environment.urlApi + '/movimentos/' + id);
  }
    
  public apagar(id: string){
    return this.http.delete(environment.urlApi + '/movimentos/' + id)
  }

 }