import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})
export class AddEditProductsComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder){
      this.form = this.fb.group({
        name:['', Validators.required],
        description:['', Validators.required],
        price:[null, Validators.required],
        stock:[null, Validators.required],
      })
    }

    addProduct(){
      //console.log("PRODUCTO AGREGADO")

      const product: Product={
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        stock: this.form.value.stock
      }

      console.log(product);
    }
}
