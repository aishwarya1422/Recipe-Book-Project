import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector:'recipe-list',
  templateUrl:'./recipe-list.component.html'
})

export class RecipeListComponent implements OnInit{ 
recipes:Recipe[] = [
  // Add image path  and complete section 52
  
  new Recipe('A test Recipe', 'This is a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiy2LHwQyiRBUl2JtA9CAR3ffGmVmu7OvhNjDWtbacLlGEL6I&s'),
];
constructor(){

}
  ngOnInit(){

  }
}