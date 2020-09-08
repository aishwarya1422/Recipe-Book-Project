import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class RecipeService { 
  recipeChanged = new Subject<Recipe[]>();
  recipes:Recipe[] = [  
    new Recipe(
        'Pasta',
        'This is Red penne pasta , a well known Italian dish',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiy2LHwQyiRBUl2JtA9CAR3ffGmVmu7OvhNjDWtbacLlGEL6I&s',
        [
          new Ingredient('Olives',10),
          new Ingredient('PastaSauce',1)
        ]
     ),
    new Recipe(
        'Pizza',
        'Most delicious junk food',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80',
        [
          new Ingredient('Cheese',20),
          new Ingredient('Paneer',10)
        ]
       )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index : number){
    return this.recipes[index];
  }

  setRecipe(recipes : Recipe[]){
    this.recipes = recipes ;
    this.recipeChanged.next(this.recipes.slice());
  }
}