import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthService } from 'src/app/auth.service';

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
    private authService: AuthService,
  ) {
    
  }

  ngOnInit() {
    this.returnUrl =this.route.snapshot.queryParams.returnUrl ||"/checklist";
    
  }

  addCheclist(checklistForm: FormGroup) {
    this.submitted = true;
    if (checklistForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService
    .addCheclist(checklistForm.get("checklistName").value) 
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