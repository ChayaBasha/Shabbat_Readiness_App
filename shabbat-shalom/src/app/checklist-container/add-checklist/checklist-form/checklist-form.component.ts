import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  checklistForm: FormGroup;

  @Input() loading: boolean;
  @Input() submitted: boolean;
  @Input() error: String;

  @Output() sendForm = new EventEmitter<FormGroup>();

  constructor(public formBuilder: FormBuilder) {}

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

  addChecklist() {
    this.sendForm.emit(this.checklistForm);
  }
}
