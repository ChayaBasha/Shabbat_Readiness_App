import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checklist-container',
  templateUrl: './checklist-container.component.html',
  styleUrls: ['./checklist-container.component.css']
})
export class ChecklistContainerComponent implements OnInit {
  authService: any;
  checklist$: any;
  checklistService: any;
  
  constructor(
    
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnChanges() {
    if (this.authService.isLoggedIn()) {
      this.checklist$ = this.checklistService.getChecklists()
    } else {
      this.router.navigate(['./exampleChecklists'])
    }
  }
  addChecklist(): void {
    this.router.navigate(['/addChecklist']);
  }
  
// selectChecklist(checklist:ChecklistModel): void {
//   this.selectedChecklist = checklist;
  // this.router.navigate(['/ingredients',checklist.tasks]);
}

