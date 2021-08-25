import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: FormGroup  = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
  });
  id: number;

  constructor(private productService: ProductService, private activateRouter: ActivatedRoute,private router : Router) {
    this.activateRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);

    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    this.productService.findbyId(id).subscribe(data => {
      this.productForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        price: new FormControl(data.price),

      });
    });
  }
  ;

  editProduct(id: number) {
    const product = this.productForm.value;
    this.productService.edit(id, product).subscribe(data => {
      alert('success');
      this.router.navigate(['/list'])
    }, error => {
      console.log(error);
    });


  }
}


