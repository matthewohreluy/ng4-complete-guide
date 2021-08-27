import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredients.model';
export class ShoppingListService{
  ingredientEmitter = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
 
  ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('tomatoes',3),
    new Ingredient('carrots',10),
  ]

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index){
    return this.ingredients[index];
  }

  deleteIngredient(index){
    let ingredients = this.ingredients.slice()
    ingredients.splice(index, 1)
    this.ingredientEmitter.next(ingredients.slice());
  }
  
  addIngredient(item){
    this.ingredients.push(item);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  updateIngredient(item: Ingredient,index: number) {
    this.ingredients[index] = item;
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  

}