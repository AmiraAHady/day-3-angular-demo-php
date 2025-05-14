import { Injectable } from '@angular/core';
import { Recipe } from '../types/recipe';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeResonse } from '../types/recipe-resonse';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private _favorites = new BehaviorSubject<Recipe[]>([]);
  public favoriteList = this._favorites.asObservable();
  // favoriteRecipeList:Recipe[]=[]
  constructor(private http: HttpClient) {}

  addToFavoriteRecipe(recipe: Recipe) {
    const currentList = this._favorites.getValue();
    if (!currentList.includes(recipe)) {
      this._favorites.next([...currentList, recipe]);
    }
  }

  removeRecipe(item: Recipe) {
    const updatedList = this._favorites
      .getValue()
      .filter((recipe) => recipe.id != item.id);
      this._favorites.next(updatedList)
  }

  getAllRecipes(): Observable<RecipeResonse> {
    // return this.http.get<RecipeResonse>(`${environment.baseUrl}/recipes`);
    return this.http.get<RecipeResonse>(`https://dummyjson.com/recipes`);
  }
  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/recipes/${id}`);
  }
}
