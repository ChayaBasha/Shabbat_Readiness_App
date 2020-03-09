 
import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from 'src/app/checklist.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  checklistForm: FormGroup;

  loading: boolean;
  submitted: boolean;
  returnUrl: string;
  error: String;
  taskForms: FormArray 

  @Output() sendForm = new EventEmitter<FormArray>();

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private checklistService: ChecklistService
  ) {

      this.taskForms= new FormArray([])
    }

  ngOnInit() {
    this.checklistForm = this.formBuilder.group({
      checklistName: ['', Validators.required],
    
    });
  }

  get f() {
    return this.checklistForm.controls;
  }

  get checklistName() {
    return this.checklistForm.get("checklistName");
  }

  get tasks() {
    return this.checklistForm.get("tasks");
  }
  addChecklist() {
    console.log("this funciton is working")
      this.submitted = true;
      if (this.checklistForm.invalid) {
        return;
      }
      this.loading = true;
      this.checklistService
    console.log('checklist Added', this.checklistForm)
    this.sendForm.emit(this.formBuilder.array([this.checklistForm, this.taskForms]));
  }

  addTask(taskForm:FormGroup) {
    this.taskForms.push(taskForm);
    console.log("I am a task", taskForm)
  }
  // addTask(taskForm: FormGroup) {
  //   this.submitted = true;
  //   if (taskForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.checklistService
  //   .addTask(taskForm.get("taskName").value, taskForm.get('duration').value) 
  //   .pipe(first())
  //   .subscribe(
  //     data => {
  //         window.alert('Task Added');
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       error => {
  //         this.error = error;
  //         this.loading = false;
  //       }
  //     );
  // }

}

