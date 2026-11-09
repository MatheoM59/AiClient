import { Component, computed, input } from '@angular/core';
import { MessageRole } from '../../type';
import type { Message } from '../../type';

@Component({
  imports: [],
  selector: 'app-message-bubble',
  styleUrl: './message-bubble.css',
  templateUrl: './message-bubble.html',
})
export class MessageBubble {
  message = input.required<Message>();

  protected readonly classes = computed(() =>
    this.message().role === MessageRole.USER
      ? 'ml-auto w-fit max-w-[80%] whitespace-pre-wrap break-words rounded-bubble bg-user-bubble px-4 py-2 text-on-user-bubble'
      : 'mr-auto w-fit max-w-[80%] whitespace-pre-wrap break-words rounded-bubble border border-border bg-assistant-bubble px-4 py-2 text-foreground',
  );
}
