import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistModel } from 'backend/models/checklist.model';
import { Observable } from 'rxjs';
import { ChecklistService } from 'src/app/checklist.service';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {

  displayedChecklist: ChecklistModel;
  checklistName: string;
  checklistTasks: [{}];

  constructor(
    private checklistService: ChecklistService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.displayedChecklist = { checklistName:"Click on a checklist", owner: 0}

    this.route.params.subscribe( value => {
      const checklistId = value["checklist_id"];
      if(checklistId) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const currentChecklist: Observable<any> = this.checklistService.getChecklist(currentUser._id, checklistId)
        console.log(currentChecklist)
        currentChecklist.subscribe(checklist => this.displayedChecklist = checklist);
      } 
    });
  
}

  ngOnChange() {

    const checklistId = this.route.snapshot.paramMap.get('checklist_id')
   this.displayedChecklist = { checklistName:"Click on a checklist", owner: 0}
   console.log(checklistId, "CHANGES!");
    // this.displayedChecklist = JSON.parse(localStorage.getItem("currentChecklist"));
   

  }


  updateChecklist(): void {
    this.router.navigate(['/updateChecklist']);
  }
}
