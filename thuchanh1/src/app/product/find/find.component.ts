import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  name : string;
  product : Product[] = [];
  constructor(private productService: ProductService, private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
