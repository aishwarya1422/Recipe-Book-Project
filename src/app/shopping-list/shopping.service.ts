import  { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients : Ingredient[] = [
   new Ingredient('Apples',5),
   new Ingredient('Oranges',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients[index];
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index , 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onAddedIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onUpdateIngredient(index : number ,newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}