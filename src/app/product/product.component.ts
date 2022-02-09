import { ProductItemService } from './../product-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productList = [{ img: '', id: 1, title: '', details: '' }];

  constructor(private productItemService: ProductItemService) {
    this.productList = this.productItemService.productList;
  }

  ngOnInit():void {}
}
