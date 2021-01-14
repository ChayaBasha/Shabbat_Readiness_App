import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {

  checklistName: string;
  checklistTasks: [{}];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
   
   }

  ngOnInit() {
    this.route.paramMap
    .subscribe(
      params => this.checklistName = params.get('checklistDetails'),
      params => this.checklistTasks = params.get('checklistTasks')
    )
    } 

updateChecklist(): void {
this.router.navigate(['/updateChecklist']);
}
}
