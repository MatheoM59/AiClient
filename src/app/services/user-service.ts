import { Service, signal, computed, inject } from '@angular/core';
import type { User, Users } from '../type';

const STORAGE_USER = 'user';
const STORAGE_USER_LIST = 'usersList';
@Service()
export class UserService {
  private readonly _currentUser = signal<User | null>(this.loadUser());
  readonly currentUser = this._currentUser.asReadonly();

  private readonly _userList = signal<Users>(this.loadUserList());
  readonly userList = this._userList.asReadonly();

  public readonly isLoggedIn = computed(() => this.currentUser() !== null);

  private loadUser(): User | null {
    const raw = localStorage.getItem(STORAGE_USER);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  private loadUserList(): Users {
    const raw = localStorage.getItem(STORAGE_USER_LIST);
    return raw ? (JSON.parse(raw) as Users) : [];
  }

  public login(name: string): void {
    const cleanName = name.trim();
    const user: User = {
      name: cleanName,
    };

    this._currentUser.set(user);

    const data = JSON.stringify(user);
    localStorage.setItem(STORAGE_USER, data);

    if (!this._userList().some((item) => item.name === cleanName)) {
      this._userList.update((l) => [...l, user]);
      const data = JSON.stringify(this._userList());
      localStorage.setItem(STORAGE_USER_LIST, data);
    }
  }

  public logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(STORAGE_USER);
  }
}
