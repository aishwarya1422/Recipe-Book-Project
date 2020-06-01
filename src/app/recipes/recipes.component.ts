import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector:'app-recipes',
  templateUrl:'./recipes.component.html',
  styleUrls:['./recipes.component.css'],
  providers:[recipeService]
})
export class RecipeComponent{
  selectedRecipe:Recipe;
}