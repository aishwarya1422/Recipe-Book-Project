import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipes/recipes.component';
import { Routes,RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes : Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/recipes'},
  {path: 'recipes', component: RecipeComponent},
  {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports :[RouterModule],
})

export class AppRoutingModule{

}