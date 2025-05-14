import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../../types/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  imports: [RecipeCardComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  recipeList!: Recipe[];
  constructor(private recipeServ: RecipeService) {}

  deleteRecipe(id: number) {
    console.log(`parent get id ${id}`);
    this.recipeList = this.recipeList.filter((recipe) => recipe.id != id);
  }
  ngOnInit() {
    this.recipeServ.getAllRecipes().subscribe((data) => {
      this.recipeList=data.recipes
    });
  }
  ngOnDestroy() {
    // cleanup
    console.log('from ngOnDestroy');
  }
}
