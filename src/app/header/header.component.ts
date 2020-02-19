import { Component ,Output , EventEmitter } from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  @Output() linkSelected = new EventEmitter<string>();
  onSelect(moduleSelected : string){
      this.linkSelected.emit(moduleSelected);
  }
}