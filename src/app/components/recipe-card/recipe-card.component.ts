import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowinfoPipe } from '../../pipes/showinfo.pipe';

@Component({
  selector: 'app-recipe-card',
  imports: [UpperCasePipe,DatePipe,ShowinfoPipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
 @Input() recipeItem:any
//  @Input() singleitem:any
 @Output() sendToParent=new EventEmitter<number>() 

 handelDelete(id:number){
  console.log(`child prodcast he want to delete recipe with id ${id}`);
  this.sendToParent.emit(id)
  
 }
 ngOnChanges(){
  console.log(`this is ngOnChanges`);
  
 }
}
