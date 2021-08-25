import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.create(product).subscribe(
      data => {
        alert('success');
        this.router.navigate(['/list']);
      }, error => {
        console.log(error);
      }
    );

    this.productForm.reset();

  }

}
