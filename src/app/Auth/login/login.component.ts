import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  loginForm : FormGroup = new FormGroup ({})

  constructor (private formBuilder: FormBuilder,private router: Router) {}
    
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({   
      username: new FormControl ('', [
        Validators.required,
        Validators.maxLength(10)
      ]),

      password: new FormControl('', [
        Validators.required
      ])
    })
  }
  submit(){
    console.log(this.loginForm.value)
    this.router.navigate(['dashboard'])
  }

}
