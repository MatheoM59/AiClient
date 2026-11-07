import { Time } from '@angular/common';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
}

export type Message = {
  id: number;
  role: MessageRole;
  content: string;
  timestamp: Timestamp;
};

export type MessageHistory = Message[];

export type Conversation = {
  id: number;
  title: string;
  createAt: Timestamp;
  messages: Message[];
};

//Special Type
export type Timestamp = number;
