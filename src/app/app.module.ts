import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipes/recipes.component';
import { RecipeListComponent } from 
'./recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from 
'./recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 
'./recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from 
'./recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipes/recipes-start/recipes-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent , RecipeComponent , RecipeListComponent, RecipeDetailComponent,RecipeEditComponent, RecipeItemComponent,RecipeStartComponent, ShoppingListComponent, ShoppingEditComponent , DropDownDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
