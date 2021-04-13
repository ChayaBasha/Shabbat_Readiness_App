//This component contains the clickable list of checklists that the user has created

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
  currentChecklist: ChecklistModel;
  
  constructor(
    private checklistService: ChecklistService, 
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.checklist$ = this.checklistService.getChecklists(currentUser._id);
    } else {
      this.router.navigate(['./exampleChecklists'])
    }
  }

  getChecklist(checklistId:number | string) {
    this.router.navigate(['/checklist', checklistId])
  }
  
}
