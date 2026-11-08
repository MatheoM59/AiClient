import { inject, linkedSignal, Service, signal } from '@angular/core';
import { UserService } from './user-service';
import { Conversation, Conversations } from '../type';

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
}
