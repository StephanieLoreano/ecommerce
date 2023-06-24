import { Component } from '@angular/core';
import { CarrinhoCompraService } from './service/carrinho-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(
    public carrinho_service:CarrinhoCompraService
  ){

  }
  displayCarrinho(){
    console.log();
    this.carrinho_service.display = this.carrinho_service.display ? false : true;
  }
}