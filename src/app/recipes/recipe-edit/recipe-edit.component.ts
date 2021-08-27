import { RecipeService } from './../recipes.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm(){
    let recipeName = '';
    let imagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        recipe['ingredients'].forEach((ingredient)=>{
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        })
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    // const newRecipe = new Recipe(
    //   this.recipeForm.get('name').value,
    //   this.recipeForm.get('description').value,
    //   this.recipeForm.get('imagePath').value,
    //   this.recipeForm.get('ingredients').value
    //   )
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
    console.log(this.recipeForm.get('ingredients'));
    console.log(this.recipeForm);
  }
 
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
