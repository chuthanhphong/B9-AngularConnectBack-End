import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.getProduct(this.id);

    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findbyId(id).subscribe((data) => {
      this.productForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        price: new FormControl(data.price),
      });
    });
    ;
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(data => {
      this.router.navigate(['/list']);
    }, error => {
      console.log(error);
    });


  }


}
