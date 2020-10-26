import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OldPasswordValidators } from './six.validators';

@Component({
  selector: 'six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: new FormControl('', Validators.required, OldPasswordValidators.incorrectPassword),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, {
      validator: OldPasswordValidators.notMatching
    });
  }
  get oldPassword() {
    return this.form.get('oldPassword')
  }
  get newPassword() {
    return this.form.get('newPassword')
  }
  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
}
