import { Component } from '@angular/core';
import { CarrinhoCompraService } from '../service/carrinho-compra.service';

@Component({
  selector: 'app-carrinho-compra',
  templateUrl: './carrinho-compra.component.html',
  styleUrls: ['./carrinho-compra.component.css']
})
export class CarrinhoCompraComponent {
  

  constructor(
    public carrinho_service:CarrinhoCompraService
  ){
  }
} 