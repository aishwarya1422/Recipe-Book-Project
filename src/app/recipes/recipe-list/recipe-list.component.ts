import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector:'recipe-list',
  templateUrl:'./recipe-list.component.html'

})

export class RecipeListComponent implements OnInit{ 
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [];

constructor(private recipeService : RecipeService){

}
ngOnInit(){
 this.recipeService.getRecipes();
}

onSelectedRecipe(recipeSelected:Recipe){
  this.recipeWasSelected.emit(recipeSelected);
}
  
}