import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checklist-container',
  templateUrl: './checklist-container.component.html',
  styleUrls: ['./checklist-container.component.css']
})
export class ChecklistContainerComponent implements OnInit {
  
  constructor(
    
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  
  }

  addChecklist(): void {
    this.router.navigate(['/addChecklist']);
  }
}
