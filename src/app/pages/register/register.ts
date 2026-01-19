import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PasswordField } from "../../shared/components/password-field/password-field";
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatInput, MatFormFieldModule, MatSelectModule, PasswordField],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  encapsulation: ViewEncapsulation.None
})
export class Register {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    console.log("Formulário submetido", this.form.value)
  }
  
  get fullName() {
    return this.form.get('fullName');
  }
  
  get email() {
    return this.form.get('email');
  }
  

}

