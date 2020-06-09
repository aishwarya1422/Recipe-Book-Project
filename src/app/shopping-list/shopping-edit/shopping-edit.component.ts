import { Component,ElementRef,ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector : 'shopping-edit',
  templateUrl : './shopping-edit.component.html',
  styleUrls : ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  @ViewChild('nameInput',{static : false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static : false}) amountInputRef : ElementRef;

  constructor(private shoppingService : ShoppingService){

  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    this.shoppingService.onAddedIngredient(newIngredient);
  }
}