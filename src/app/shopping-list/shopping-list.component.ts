import { LoggingService } from './../logging.service';
import { ShoppingListService } from './shoping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingredientSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { 
   
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSubscription = this.shoppingListService.ingredientEmitter.subscribe((ingredients: Ingredient[])=>{
     this.ingredients = ingredients;
    })
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.ingredientSubscription.unsubscribe();
  }

  
}
