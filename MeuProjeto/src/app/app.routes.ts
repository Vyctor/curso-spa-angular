import { Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { ContactComponent } from './company/contact/contact.component';
import { AboutComponent } from './company/about/about.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'feature', component: DataBindingComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
];
