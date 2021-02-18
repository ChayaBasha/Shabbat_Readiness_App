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

  getChecklist(checklistId:number) {
    console.log("I am trying to get the checklist");
    console.log(checklistId);
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentChecklist: Observable<any> = this.checklistService.getChecklist(currentUser._id, checklistId);
    
    currentChecklist.toPromise().then(v => console.log(v));
    
  }
  
}
