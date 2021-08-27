import { Subscription } from 'rxjs';
import { RecipeService } from './../recipes.service';
import { Recipe } from './../recipes.model';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
   this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}
