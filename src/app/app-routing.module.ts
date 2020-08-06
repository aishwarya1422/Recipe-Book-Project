import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipes/recipes.component';
import { Routes,RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from 
'./recipes/recipe-list/recipe-item/recipe-item.component';

const appRoutes : Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/recipes'},
  {path: 'recipes', component: RecipeComponent,children:[
    {path : 'recipeItem', component: RecipeItemComponent }
    ]},
  {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports :[RouterModule],
})

export class AppRoutingModule{

}