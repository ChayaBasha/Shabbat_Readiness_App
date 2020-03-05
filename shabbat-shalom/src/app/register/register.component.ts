import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthService } from "../auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    if (this.authService.isLoggedIn()) {
      window.alert('Already Logged in!');
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() {
    this.returnUrl =this.route.snapshot.queryParams.returnUrl ||"/checklist";
    
  }

  register(registerForm: FormGroup) {
    this.submitted = true;
    if (registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService
    .register(registerForm.get("firstName").value, registerForm.get("lastName").value, registerForm.get("username").value, registerForm.get("password").value) 
    .pipe(first())
    .subscribe(
      data => {
          window.alert('Successfully registered and logged in!');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }

}
