import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";

import { ChatbotService } from "../gen/chatbot/ricabot/service_connect";

import type { Conversation, Message } from "./domain/types";
import * as convert from "./connect-convert";

// This is the interface that the ConnectRouter expects to be implemented
interface ConversationsService {
  createConversation(email: string): Conversation;
  getConversation(conversationId: string): Conversation | undefined;
  sendMessage(conversationId: string, content: string): Message;
}

export default (conversationsService: ConversationsService) =>
  (router: ConnectRouter) =>
    // Registers chatbot.v1alpha1.ChatbotService and exposes its methods on the ConnectRouter
    router.service(ChatbotService, {
      async createConversation(req) {
        const conversation = conversationsService.createConversation(req.email);

        return {
          conversation: convert.convertConversationToPb(conversation),
        };
      },
      async getConversation(req) {
        const conversation = conversationsService.getConversation(
          req.conversationId,
        );

        if (!conversation) {
          throw new ConnectError("Conversation not found", Code.NotFound);
        }

        return {
          conversation: convert.convertConversationToPb(conversation),
        };
      },
      async sendMessage(req) {
        if (!req.message) {
          throw new ConnectError("Message is required", Code.InvalidArgument);
        }

        const message = conversationsService.sendMessage(
          req.conversationId,
          req.message.content,
        );

        return {
          message: convert.convertMessageToPb(message),
        };
      },
    });
