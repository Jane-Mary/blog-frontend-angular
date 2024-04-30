import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {


  registerForm: FormGroup = new FormGroup({})
 

  constructor(private formBuilder: FormBuilder,private router: Router) {



    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      username: ['', [
        Validators.required,
        Validators.maxLength(10)
      ]],

      name: ['', [
        Validators.required,
        Validators.maxLength(10)
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    }

    )

  }
  submit(){
    console.log(this.registerForm.value)
    this.router.navigate(['dashboard'])
  }

} 
