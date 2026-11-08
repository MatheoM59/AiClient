import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private router = inject(Router);
  protected service = inject(UserService);
  protected readonly isOpen = signal<boolean>(false);
  protected userList = this.service.userList;

  change(name: string): void {
    this.service.login(name);
    this.openClose();
  }
  logout() {
    this.service.logout();
    this.openClose();
    this.router.navigate(['/']);
  }
  openClose(): void {
    this.isOpen() ? this.isOpen.set(false) : this.isOpen.set(true);
  }
}
