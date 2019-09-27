import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
    signupForm: FormGroup;
    errorMessage: string;
  
    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) { }
  
    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
    }
  
    onSubmit() {
      this.errorMessage = "";
      
      const email = this.signupForm.get('email').value;
      const password = this.signupForm.get('password').value;
      
      this.authService.createNewUser(email, password).then(
        () => {
          console.log("compte créer");
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
