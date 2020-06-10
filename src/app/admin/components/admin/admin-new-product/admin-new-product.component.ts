import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service'
import { Category } from 'src/app/shared/models/category';
import { Subscribable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.css']
})
export class AdminNewProductComponent implements OnInit {

  categories: Category[] = []
  categorySubscription: Subscription
  constructor(private categoryService: CategoryService , 
    private productService : ProductService) { }

  ngOnInit(): void {
    this.collectAllCategories();
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe()
  }

  collectAllCategories() {
    this.categorySubscription = this.categoryService.getAllCategories()
      .subscribe({
        next: (categories) => {
          this.categories = categories
        }
      })
  }

  saveCategory(categoryForm: HTMLFormElement) {
    let title = (<HTMLInputElement>categoryForm.elements.namedItem('title')).value
    console.log({ title });

    this.categoryService.saveCategory({ title: title })
      .subscribe({
        next: result => {
          categoryForm.reset()
          this.categories.push(result)
        },
        error: (error : HttpErrorResponse) => {
          if(error.message.includes('Auth Failed')){
            // logout
          }
        }
      }
      )

  }
  saveProduct(productForm :HTMLFormElement) {
    let name = (<HTMLInputElement>productForm.elements.namedItem('name')).value
    let price = (<HTMLInputElement>productForm.elements.namedItem('price')).value
    let category = (<HTMLSelectElement>productForm.elements.namedItem('category')).value
    let productImage = (<HTMLInputElement>productForm.elements.namedItem('productImage')).files[0]

    let values = {
      name, price, category, productImage
    }

    let data = new FormData()
    data.append('name' , name);
    data.append('price' , price);
    data.append('category' , category);
    data.append('productImage' , productImage);

    this.productService.saveProduct(data)
    .subscribe({
      next : (product)=>{
        productForm.reset()
      } , 
      error : (error: HttpErrorResponse)=>{
        if(error.message.includes('Auth Failed')){
          // logout
        }
      }
    })

    console.log(values);

  }
}
