import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector:'recipe-list',
  templateUrl:'./recipe-list.component.html'
})

export class RecipeListComponent implements OnInit{ 
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[] = [  
  new Recipe('Pasta', 'This is Red penne pasta , a well known Italian dish','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiy2LHwQyiRBUl2JtA9CAR3ffGmVmu7OvhNjDWtbacLlGEL6I&s'),
  new Recipe('Pizza', 'Most delicious junk food','https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80')
];

constructor(){

}

onSelectedRecipe(recipeSelected:Recipe){
  this.recipeWasSelected.emit(recipeSelected);
}
  ngOnInit(){

  }
}