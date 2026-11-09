import { inject, linkedSignal, Service } from '@angular/core';
import { UserService } from './user-service';
import { Conversation, Conversations, MessageRole } from '../type';
import type { Message } from '../type';

const STORAGE_KEY = 'conversation: ';
@Service()
export class ConversationService {
  private service = inject(UserService);
  private currentUser = this.service.currentUser;

  private readonly _conversationsList = linkedSignal<Conversations>(() =>
    this.loadConversationList(),
  );
  readonly conversationsList = this._conversationsList.asReadonly();

  private loadConversationList(): Conversations {
    const raw = localStorage.getItem(this.createStorageKey());
    return raw ? (JSON.parse(raw) as Conversations) : [];
  }

  private createStorageKey(): string {
    return STORAGE_KEY + this.currentUser()?.name;
  }

  createConversation(): string {
    const conversation: Conversation = {
      id: crypto.randomUUID(),
      title: 'Nouvelle conversation',
      createdAt: Date.now(),
      messages: [],
    };
    this._conversationsList.update((c) => [...c, conversation]);
    const data = JSON.stringify(this._conversationsList());
    localStorage.setItem(this.createStorageKey(), data);
    return conversation.id;
  }

  private createMessage(text: string, who: MessageRole): Message {
    return {
      id: crypto.randomUUID(),
      role: who,
      content: text,
      timestamp: Date.now(),
    };
  }
  addNewMessage(id: string, text: string, who: MessageRole) {
    this._conversationsList.update((c) => {
      return c.map((conv) => {
        if (conv.id === id) {
          return { ...conv, messages: [...conv.messages, this.createMessage(text, who)] };
        }
        return conv;
      });
    });
    const data = JSON.stringify(this._conversationsList());
    localStorage.setItem(this.createStorageKey(), data);
  }
}
