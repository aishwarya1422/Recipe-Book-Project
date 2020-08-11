import { Component} from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector : 'app-recipe-edit',
  templateUrl : './recipe-edit.component.html'
})

export class RecipeEditComponent {
  id : number;
  mode = false;
  constructor(private route : ActivatedRoute){}
  ngOnInit(){
    this.route.params.
    subscribe(
      (param:Params)=>{
        this.id = +param['id'];
        this.mode = param['id'] != null;
      });
  }
}