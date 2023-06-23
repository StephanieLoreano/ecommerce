import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { HomeComponent } from './home/home.component';
import { ProdutoService } from './service/produto.service';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoHomeComponent,
    ProdutoDetalheComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }