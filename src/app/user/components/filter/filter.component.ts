import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/shared/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
   categories : Category[] = []
   min : number[]= [];
   max : any[]= [];
   category = ''
  constructor(private categoryService : CategoryService ,
     private router :Router
    ) { }

  ngOnInit(): void {
    Array(10).fill('').forEach((e , index)=>{
      this.min.push((index+1)*100)
      
    })
    

    this.collectAllCategory();
  }

  setMaxvalue(minValue : number){
    this.max = []
    console.log(minValue);
    Array(10).fill('').forEach((e , index)=>{
      this.max.push(+minValue + ((index+1)* 100))
    })
    this.max.push(this.max[this.max.length-1] + "+")
  }

  categorySelected(category_id : string){
    console.log(category_id);
    this.category = category_id
    this.router.navigate([''] ,
     {
       queryParams : {
          'category' : category_id
       }
     })
  }

  collectAllCategory(){
    this.categoryService.getAllCategories()
    .subscribe({
      next:(categories)=>{
        this.categories = categories
        console.log(categories);
        
      }, 
      error : (responce : HttpErrorResponse)=>{
        console.log(responce);
      }
    })
  }


  filter(minValue , maxValue){
    let queryParams =  {
      'category' : this.category,
   }
    if(!isNaN(minValue)){
      queryParams['min'] = minValue
    }
    if(!isNaN(maxValue)){
      queryParams['max'] = maxValue
    }

    this.router.navigate([''] ,
     {  
       queryParams
     })
    
    
  }

}
