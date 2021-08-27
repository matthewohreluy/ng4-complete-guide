import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipes.model';
import { RecipeService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  url: string = 'https://ng-course-recipe-book-4342d-default-rtdb.asia-southeast1.firebasedatabase.app';
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){}


  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url + '/recipes.json',recipes).subscribe((response)=>{
      console.log(response)
    });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>(this.url + '/recipes.json')
    .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }
}