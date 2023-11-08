import { randomUUID } from "crypto";

import { Conversation, Message } from "../domain/types";

export class MemoryConversationService {
  private conversations: Map<string, Conversation> = new Map();

  createConversation(email: string): Conversation {
    const conversation: Conversation = {
      id: randomUUID(),
      createdAt: new Date(),
      email: email,
      messages: [],
    };
    this.conversations.set(conversation.id, conversation);

    return conversation;
  }

  getConversation(conversationId: string): Conversation | undefined {
    return this.conversations.get(conversationId);
  }

  sendMessage(conversationId: string, content: string): Message {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error("Conversation not found");
    }

    const userMessage: Message = {
      id: randomUUID(),
      createdAt: new Date(),
      role: "user",
      content: content,
    };
    conversation.messages.push(userMessage);

    const botMessage: Message = {
      id: randomUUID(),
      createdAt: new Date(),
      role: "bot",
      content: "Hello from Connect!",
    };
    conversation.messages.push(botMessage);

    return botMessage;
  }
}