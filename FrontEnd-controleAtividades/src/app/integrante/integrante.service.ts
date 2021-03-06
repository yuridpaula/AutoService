import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

// classe que representa o model no front-end
export class Integrante {
  public _id: string;
  public integrante: string;
  public nome: string;
  public contato: string;
  public uf: string;
  public cidade: string;
  public rua: string;
  public numero: number;
  public complemento: string;
}

@Injectable()
export class IntegranteService {

  constructor(private http: HttpClient) {}

  public listarTodos(){
    return this.http.get(environment.urlApi + '/integrantes');
  }

  public salvar(dados: Integrante){
    //integrante já existe
    if(dados._id){
      return this.http.put(environment.urlApi + '/integrantes', dados);
    }
    //recurso novo
    else {
      return this.http.post(environment.urlApi + '/integrantes', dados)
    }
  }

  public obterPorId(id: string){
    return this.http.get(environment.urlApi + '/integrantes/' + id)
  }

  public apagar(id: string){
    return this.http.delete(environment.urlApi + '/integrantes/' + id)
  }

}



