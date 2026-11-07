import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ConversationsListPage } from './pages/conversations-list-page/conversations-list-page';
import { Conversation } from './pages/conversation/conversation';
export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'conversations',
    component: ConversationsListPage,
  },
  { path: 'conversation/:id', component: Conversation },
];
