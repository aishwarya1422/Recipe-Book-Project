import { Component, OnInit ,OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector : 'shopping-edit',
  templateUrl : './shopping-edit.component.html',
  styleUrls : ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit , OnDestroy {
  @ViewChild('f', {static: false}) shoppingForm : NgForm;
  shoppingSubscription : Subscription;
  editMode : Boolean;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private shoppingService : ShoppingService){

  }

  ngOnInit(){
      this.shoppingSubscription = this.shoppingService.startedEditing
      .subscribe((index : number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.shoppingForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingService.onUpdateIngredient(this.editedItemIndex , newIngredient);
    }else{
      this.shoppingService.onAddedIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.shoppingForm.reset();
  }

  ngOnDestroy(){
    this.shoppingSubscription.unsubscribe;
  }
}