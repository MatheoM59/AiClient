import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { conversationIdGuard } from './conversation-id-guard';

describe('conversationIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => conversationIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
