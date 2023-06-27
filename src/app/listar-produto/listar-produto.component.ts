import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

    public produtos:Array<any> = [];
  
    constructor(
      public router:Router,
      public produto_service:ProdutoService
    ){
  
    }
    ngOnInit(): void {
      this.produtos = this.produto_service.getAll();
    }
  
  }


