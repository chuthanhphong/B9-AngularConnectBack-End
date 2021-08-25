import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name: string;
  products: Product[] = [];

  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  getByName(name: string) {
    if (name == '') {
      this.getAll();
    } else {
      this.productService.findByName(name).subscribe(data => {
        this.products = data;
      });
    }
  }
}
