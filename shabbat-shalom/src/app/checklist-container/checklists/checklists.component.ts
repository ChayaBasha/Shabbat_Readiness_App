import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChecklistModel } from 'backend/models/checklist.model';
import { ChecklistService } from 'src/app/checklist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.css']
})
export class ChecklistsComponent implements OnInit {

  checklist$: Observable<ChecklistModel[]>;
  selectedChecklist: ChecklistModel;
  
  constructor(
    private checklistService: ChecklistService, 
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.checklist$ = this.checklistService.getChecklists();
    } else {
      this.router.navigate(['./exampleChecklists'])
    }
  }
// selectChecklist(checklist:ChecklistModel): void {
//   this.selectedChecklist = checklist;
  // this.router.navigate(['/ingredients',checklist.tasks]);
}
