import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produtos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProducts();
  }
}
