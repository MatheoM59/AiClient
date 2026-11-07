import { Service, signal, computed } from '@angular/core';
import type { User } from '../type';

const STORAGE_KEY = 'user';
@Service()
export class UserService {
  private readonly _currentUser = signal<User | null>(this.load());
  readonly currentUser = this._currentUser.asReadonly();

  public readonly isLoggedIn = computed(() => this.currentUser() !== null);

  private load(): User | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  public login(name: string): void {
    const cleanName = name.trim();
    const user: User = {
      name: cleanName,
    };
    this._currentUser.set(user);
    const data = JSON.stringify(user);
    localStorage.setItem(STORAGE_KEY, data);
  }
  public logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }
}
