import  { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class ShoppingService {
  ingredients : Ingredient[] = [
   new Ingredient('Apples',5),
   new Ingredient('Oranges',6)
  ];

  getingredients(){
    return this.ingredients.slice();
  }

  onAddedIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}