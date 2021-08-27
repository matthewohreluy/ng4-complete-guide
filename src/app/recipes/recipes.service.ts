import { ShoppingListService } from './../shopping-list/shoping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipes.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  constructor(private shoppingListService: ShoppingListService){}
    recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index){
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}