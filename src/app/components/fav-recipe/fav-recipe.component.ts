import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-fav-recipe',
  imports: [RecipeCardComponent],
  templateUrl: './fav-recipe.component.html',
  styleUrl: './fav-recipe.component.css'
})
export class FavRecipeComponent {
  favList:Recipe[]=[]
  constructor(private recipeServ:RecipeService){}

  ngOnInit(){
      this.recipeServ.favoriteList.subscribe((data)=>{
        this.favList=data
        console.log(data);
        
      })
  }
  removeFromFavorite(item:Recipe){
    this.recipeServ.removeRecipe(item)
  }

}
