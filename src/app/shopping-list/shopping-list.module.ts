import { SharedModule } from './../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule
  ],
  exports:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ]
})
export class ShoppingListModule{

}