import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'bot-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: Validators.required,
      initialValueIsDefault: true,
    }),
    lastName: new FormControl('', {
      validators: Validators.required,
      initialValueIsDefault: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      initialValueIsDefault: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      initialValueIsDefault: true,
    }),
  });

  constructor(private userService: UserService, private router: Router) {}

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  register() {
    let user: IUser = this.registerForm.getRawValue();

    this.firstName?.reset();

    this.userService.register(user).subscribe({
      next: () => this.router.navigate(['/catalog']),
    });
  }
}
