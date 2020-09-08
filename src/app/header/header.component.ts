import { Component ,Output , EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService : DataStorageService){}
  onSelect(moduleSelected : string){
      this.featureSelected.emit(moduleSelected);
  }

  onSaveRecipe(){
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipe(){
    this.dataStorageService.fetchRecipes();
  }
}