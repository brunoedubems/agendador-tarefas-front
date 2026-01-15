import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'input-password-field',
  imports: [MatFormFieldModule, MatLabel, MatInput,MatIconModule],
  templateUrl: './password-field.html',
  styleUrl: './password-field.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PasswordField {
hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
