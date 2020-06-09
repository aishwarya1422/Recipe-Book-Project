import  { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn:"root"})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients : Ingredient[] = [
   new Ingredient('Apples',5),
   new Ingredient('Oranges',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  onAddedIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}