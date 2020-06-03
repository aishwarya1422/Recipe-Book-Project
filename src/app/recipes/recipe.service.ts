import { Recipe } from './recipe.model';

export class RecipeService { 
  recipes:Recipe[] = [  
    new Recipe('Pasta', 'This is Red penne pasta , a well known Italian dish','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiy2LHwQyiRBUl2JtA9CAR3ffGmVmu7OvhNjDWtbacLlGEL6I&s'),
    new Recipe('Pizza', 'Most delicious junk food','https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80')
  ];

  getRecipes(){
    return this.recipes.slice(); 
  }
}