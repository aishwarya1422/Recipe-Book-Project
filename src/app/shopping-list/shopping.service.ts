import  { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients : Ingredient[] = [
   new Ingredient('Apples',5),
   new Ingredient('Oranges',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  onAddedIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}