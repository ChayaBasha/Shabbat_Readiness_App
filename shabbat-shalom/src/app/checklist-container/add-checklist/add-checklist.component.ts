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
    console.log("you called me from add-checklist component")
    this.submitted = true;
    if (checklistForm.invalid) {
      return;
    }
    this.loading = true;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.checklistService
    .addChecklist(currentUser._id, checklistForm.at(0).get("checklistName").value) 
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