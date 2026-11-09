import { Component, input, output, computed, inject } from '@angular/core';
import { ConversationService } from '../../services/conversation-service';
import { Router } from '@angular/router';
import { LucideArrowLeft } from '@lucide/angular';
import { MessageForm } from '../../components/message-form/message-form';
import { Message, MessageRole } from '../../type';

@Component({
  imports: [LucideArrowLeft, MessageForm],
  selector: 'app-conversation',
  styleUrl: './conversation.css',
  templateUrl: './conversation.html',
})
export class Conversation {
  service = inject(ConversationService);
  router = inject(Router);
  id = input.required<string>();
  public readonly currentConv = computed(() =>
    this.service.conversationsList().find((item) => item.id === this.id()),
  );
  goConversationsList(): void {
    this.router.navigate(['/conversations']);
  }
  sent(message: string) {
    this.service.addNewMessage(this.id(), message, MessageRole.USER);
  }
}
