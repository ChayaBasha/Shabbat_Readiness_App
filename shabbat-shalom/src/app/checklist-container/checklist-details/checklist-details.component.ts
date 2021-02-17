import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from 'src/app/checklist.service';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {

  checklistName: string;
  checklistTasks: [{}];
  
  constructor(
    private checklistService: ChecklistService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
   
   }

  ngOnInit() {
   
    // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // this.route.paramMap
    // .subscribe(
    //   params => this.checklistName = params.get('checklistDetails'),
    //   params => this.checklistTasks = params.get('checklistTasks')
    // )
    } 

updateChecklist(): void {
this.router.navigate(['/updateChecklist']);
}
}
