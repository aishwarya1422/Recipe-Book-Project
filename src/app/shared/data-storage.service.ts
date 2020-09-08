import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn:"root"})
export class DataStorageService {
  constructor(private http : HttpClient, private recipeService : RecipeService){}

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    console.log(recipes);
    this.http.put('https://ng-recipe-book-15bc4.firebaseio.com/recipes.json' , recipes)
    .subscribe(response => 
    {
      console.log(response);
    });
  }

  fetchRecipes(){
    this.http.get<Recipe>('https://ng-recipe-book-15bc4.firebaseio.com/recipes.json')
    .subscribe(recipes => {
      this.recipeService.setRecipe(recipes);
    })
  }
}