import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ChecklistModel } from 'backend/models/checklist.model';
import { ChecklistService } from '../checklist.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checklist-container',
  templateUrl: './checklist-container.component.html',
  styleUrls: ['./checklist-container.component.css']
})
export class ChecklistContainerComponent implements OnInit {
  
  checklist$: Observable<ChecklistModel[]>;
  
  constructor(
    private checklistService: ChecklistService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
//TODO: you just commented this out to remove compile errors

  ngOnChanges() {
    if (this.authService.isLoggedIn()) {
      const currentUser =JSON.parse(localStorage.getItem("currentUser"));
      this.checklist$ = this.checklistService.getChecklists(currentUser._id)
    } else {
      this.router.navigate(['./exampleChecklists'])
    }
  }
  addChecklist(): void {
    this.router.navigate(['/addChecklist']);
  }
  
// selectChecklist(checklist:ChecklistModel): void {
//   this.selectedChecklist = checklist;
//   this.router.navigate(['/checklistTasks',checklist.tasks]);
// }
}
