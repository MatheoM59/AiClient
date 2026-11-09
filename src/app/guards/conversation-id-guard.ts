import { CanActivateFn, Router } from '@angular/router';
import { ConversationService } from '../services/conversation-service';
import { inject } from '@angular/core';
export const conversationIdGuard: CanActivateFn = (route, state) => {
  const service = inject(ConversationService);
  const router = inject(Router);
  const param: string | null = route.paramMap.get('id');

  return service.conversationsList().some((item) => item.id === param)
    ? true
    : router.createUrlTree(['/conversations']);
};
