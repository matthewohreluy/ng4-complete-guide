import { ShoppingListService } from './../shoping-list.service';
import { Ingredient } from './../../shared/ingredients.model';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  constructor(private shoppingListService: ShoppingListService) { }
  shoppingForm: FormGroup
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });
    this.subscription =  this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{ 
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
       
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  onSubmitItem(){
    var newIngredient = new Ingredient(this.shoppingForm.get('name').value, this.shoppingForm.get('amount').value)
    if(this.editMode === false){
      this.shoppingListService.addIngredient(newIngredient);
    }else
    if(this.editMode === true){
      this.editMode = false;
      this.shoppingListService.updateIngredient(newIngredient, this.editedItemIndex);
    }
   this.clearInput();
  }

  clearInput() {
    this.editMode = false;
    this.shoppingForm.reset();
  }

  deleteItem(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearInput();
  }
}
