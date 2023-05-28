import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
