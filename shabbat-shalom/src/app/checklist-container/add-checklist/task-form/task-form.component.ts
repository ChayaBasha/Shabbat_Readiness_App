import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from 'src/app/checklist.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm: FormGroup;
  
  loading: boolean;
  submitted: boolean;
  returnUrl: string;
  error: String;

  @Output() sendForm = new EventEmitter<FormGroup>();

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private checklistService: ChecklistService,) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDuration: [1, Validators.required]
    
    });
  }

  get f() {
    return this.taskForm.controls;
  }

  get taskName() {
    return this.taskForm.get("taskName");
  }

  get taskDuration() {
    return this.taskForm.get("taskDuration");
  }

  addTask() {
    this.sendForm.emit(this.taskForm);
  
  }

}
