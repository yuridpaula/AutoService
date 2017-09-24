import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { 
    
  }

  listarTodos(){
    return this.http.get(environment.urlApi + '/produto');
  }
}
