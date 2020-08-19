import { Component} from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector : 'app-recipe-edit',
  templateUrl : './recipe-edit.component.html'
})

export class RecipeEditComponent {
  id : number;
  mode = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute, private recipeService : RecipeService){}
  ngOnInit(){
    this.route.params.
    subscribe(
      (param:Params)=>{
        this.id = +param['id'];
        this.mode = param['id'] != null;
        this.initForm();
      });
  }

  private initForm (){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.mode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.desc;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name),
            'amount' : new FormControl(ingredient.amount)
          }))
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription),
      'ingredients' : recipeIngredients
    });
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':  new FormControl(),
      'amount': new FormControl()
    })
    );
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}