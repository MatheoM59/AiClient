export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
}

export type Message = {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Timestamp;
};

export type MessageHistory = Message[];

export type Conversation = {
  id: string;
  title: string;
  createdAt: Timestamp;
  messages: MessageHistory;
};

export type User = {
  name: string;
};

//Special Type
export type Timestamp = number;
