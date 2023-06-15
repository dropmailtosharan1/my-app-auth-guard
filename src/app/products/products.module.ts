import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from '../calculator/calculator.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
