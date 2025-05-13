import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  constructor(){
    console.log('hello from app component constructor');
    
  }
}
