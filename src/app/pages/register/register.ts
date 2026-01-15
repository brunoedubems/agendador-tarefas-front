import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PasswordField } from "../../shared/components/password-field/password-field";
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-register',
  imports: [MatCardModule, MatButtonModule,MatInput, MatFormFieldModule, MatSelectModule, PasswordField],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  encapsulation: ViewEncapsulation.None
})
export class Register {
}

