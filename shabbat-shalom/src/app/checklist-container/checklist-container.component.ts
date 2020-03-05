import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

// import { RecipeService } from '../recipe.service';
// import { RecipeModel } from '../../../backend/models/recipe.model';

@Component({
  selector: 'app-checklist-container',
  templateUrl: './checklist-container.component.html',
  styleUrls: ['./checklist-container.component.css']
})
export class ChecklistContainerComponent implements OnInit {

  // recipeList$: Observable<RecipeModel[]>;
  // selectedRecipe: RecipeModel;
  
  constructor(
    // private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.recipeList$ = this.recipeService.getRecipes();
  }

// selectRecipe(recipe:RecipeModel): void {
//   this.selectedRecipe = recipe;
//   this.router.navigate(['/ingredients',recipe.ingredients]);
// }
  addChecklist(): void {
    this.router.navigate(['/addChecklist']);
  }
}
