import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { first } from "rxjs/operators";
import { ChecklistService } from 'src/app/checklist.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.css']
})
export class AddChecklistComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private checklistService: ChecklistService,
  ) {
    
  }

  ngOnInit() {
    this.returnUrl =this.route.snapshot.queryParams.returnUrl ||"/checklist";
    
  }

  addChecklist(checklistForm: FormArray) {
    console.log("you called me")
    this.submitted = true;
    if (checklistForm.invalid) {
      return;
    }
    this.loading = true;
    this.checklistService
    .addChecklist(checklistForm.at(0).get("checklistName").value, checklistForm.at(1).value) 
    .pipe(first())
    .subscribe(
      data => {
          window.alert('Checklist Added');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }

}