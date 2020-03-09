import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChecklistModel } from 'backend/models/checklist.model';
import { ChecklistService } from 'src/app/checklist.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist$ = this.checklistService.getChecklists();
  }

selectChecklist(checklist:ChecklistModel): void {
  this.selectedChecklist = checklist;
  // this.router.navigate(['/ingredients',checklist.tasks]);
}
}
