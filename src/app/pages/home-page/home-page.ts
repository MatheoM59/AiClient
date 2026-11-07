import { Component, inject } from '@angular/core';
import { Button } from '../../components/button/button';
import { UserService } from '../../services/user-service';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  imports: [Button, ReactiveFormsModule],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
  host: {
    class: 'flex flex-1 items-center justify-center px-4 py-8',
  },
})
export class HomePage {
  protected userService = inject(UserService);
  private router = inject(Router);
  login() {
    if (this.userForm.valid) {
      const name = this.userForm.controls.userName.value;
      this.userService.login(name);
      this.router.navigate(['/conversations']);
    }
  }

  protected userForm = new FormGroup({
    userName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    }),
  });

  protected readonly userName = this.userForm.controls.userName;

  protected showErrors(): boolean {
    return this.userName.invalid && (this.userName.dirty || this.userName.touched);
  }
}
