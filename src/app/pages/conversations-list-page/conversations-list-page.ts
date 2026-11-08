import { Component, inject } from '@angular/core';
import { ConversationService } from '../../services/conversation-service';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  imports: [Button],
  selector: 'app-conversations-list-page',
  styleUrl: './conversations-list-page.css',
  templateUrl: './conversations-list-page.html',
})
export class ConversationsListPage {
  private service = inject(ConversationService);
  private router = inject(Router);
  createConversation(): void {
    const id = this.service.createConversation();
    this.router.navigate(['/conversation', id]);
  }
}
