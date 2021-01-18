import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ChecklistModel } from 'backend/models/checklist.model';
import { ChecklistService } from '../checklist.service';

@Component({
  selector: 'app-checklist-container',
  templateUrl: './checklist-container.component.html',
  styleUrls: ['./checklist-container.component.css']
})
export class ChecklistContainerComponent implements OnInit {
  authService: Observable<ChecklistModel[]>;
  checklistService: ChecklistModel;
  
  constructor(
    private checklistServe: ChecklistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
//TODO: you just commented this out to remove compile errors

//   ngOnChanges() {
//     if (this.authService.isLoggedIn()) {
//       this.checklist$ = this.checklistService.getChecklists()
//     } else {
//       this.router.navigate(['./exampleChecklists'])
//     }
//   }
//   addChecklist(): void {
//     this.router.navigate(['/addChecklist']);
//   }
  
// selectChecklist(checklist:ChecklistModel): void {
//   this.selectedChecklist = checklist;
//   this.router.navigate(['/checklistTasks',checklist.tasks]);
// }
}
