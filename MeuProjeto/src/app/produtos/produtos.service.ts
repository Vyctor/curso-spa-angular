import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
  protected urlServiceV1: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlServiceV1 + 'produtos');
  }
}
