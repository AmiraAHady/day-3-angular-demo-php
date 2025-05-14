import { Recipe } from './recipe';

export interface RecipeResonse {
  limit: number;
  recipes: Recipe[];
  skip: number;
  total: number;
}
