import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipes/recipes.component';
import { Routes,RouterModule } from "@angular/router";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from 
'./recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from 
'./recipes/recipe-edit/recipe-edit.component';

const appRoutes : Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/recipes'},
  {path: 'recipes', component: RecipeComponent,children:[
    {path:'',component : RecipeStartComponent},
    {path : 'new' , component: RecipeEditComponent},
    {path : ':id', component: RecipeDetailComponent },
    {path : ':id/Edit' , component: RecipeEditComponent}
    ]},
  {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports :[RouterModule],
})

export class AppRoutingModule{

}