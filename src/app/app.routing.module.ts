import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoCompraComponent } from './carrinho-compra/carrinho-compra.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'produto/:id',
    component:ProdutoDetalheComponent
  },
  {
    path:'carrinho-compra',
    component:CarrinhoCompraComponent
  },
  {
    path:'listar-produto',
    component:ListarProdutoComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }