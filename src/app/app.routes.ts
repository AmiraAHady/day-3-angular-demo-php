import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { authGuard } from './guards/auth-guard.guard';
import { FavRecipeComponent } from './components/fav-recipe/fav-recipe.component';

export const routes: Routes = [
  //home route
  { path: 'recipe', component: RecipeComponent,title:'Home Page' },
  { path: 'about', component: AboutUsComponent ,title:'About Page'},
  { path: 'recipeDetails/:id', component: RecipeDetailsComponent },
  { path: 'contact', component: ContactUsComponent,title:'Contact Page' },
  { path: 'products', component: ProductsComponent,title:'Products Page',canActivate:[authGuard] },
  { path: 'fav', component: FavRecipeComponent,title:'Fav Page' },
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  // { path: '', component:RecipeComponent },
  // wildcard route
  { path: '**', component: PageNotFoundComponent },
];
