import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ConversationsListPage } from './pages/conversations-list-page/conversations-list-page';
import { Conversation } from './pages/conversation/conversation';
import { loggedGuard } from './guards/logged-guard';
import { guestGuard } from './guards/guest-guard';
export const routes: Routes = [
  { path: '', component: HomePage, canActivate: [guestGuard] },
  {
    path: 'conversations',
    component: ConversationsListPage,
    canActivate: [loggedGuard],
  },
  { path: 'conversation/:id', component: Conversation, canActivate: [loggedGuard] },
  { path: '**', redirectTo: '/' },
];
