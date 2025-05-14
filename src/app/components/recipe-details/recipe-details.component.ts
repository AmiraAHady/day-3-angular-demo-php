import { Component, Input } from '@angular/core';
import { Recipe } from '../../types/recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  @Input() id?: string;
  selectedRecipe?: Recipe;
  constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipeById(parseInt(this.id!)).subscribe((data)=>{
      this.selectedRecipe=data
      
    })

   
  }
}
