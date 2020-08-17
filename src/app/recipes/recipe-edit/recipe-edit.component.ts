import { Component} from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector : 'app-recipe-edit',
  templateUrl : './recipe-edit.component.html'
})

export class RecipeEditComponent {
  id : number;
  mode = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute, private fb: FormBuilder , private recipeService : RecipeService){}
  ngOnInit(){
    this.route.params.
    subscribe(
      (param:Params)=>{
        this.id = +param['id'];
        this.mode = param['id'] != null;
        this.initForm();
      });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  private initForm (){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    if(this.mode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.desc;

    }
    this.recipeForm = this.fb.group({
      'name' : [recipeName],
      'imagePath' : [recipeImagePath],
      'description' : [recipeDescription]
    });
  }
}