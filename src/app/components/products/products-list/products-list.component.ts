import { Component, Input, OnInit } from '@angular/core';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reduce';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 @Input() state:ProductsState|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
