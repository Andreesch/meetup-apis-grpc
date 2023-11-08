// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file chatbot/ricabot/service.proto (package chatbot.ricabot, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateConversationRequest, CreateConversationResponse, GetConversationRequest, GetConversationResponse, SendMessageRequest, SendMessageResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service chatbot.ricabot.ChatbotService
 */
export const ChatbotService = {
  typeName: "chatbot.ricabot.ChatbotService",
  methods: {
    /**
     * @generated from rpc chatbot.ricabot.ChatbotService.CreateConversation
     */
    createConversation: {
      name: "CreateConversation",
      I: CreateConversationRequest,
      O: CreateConversationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc chatbot.ricabot.ChatbotService.GetConversation
     */
    getConversation: {
      name: "GetConversation",
      I: GetConversationRequest,
      O: GetConversationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc chatbot.ricabot.ChatbotService.SendMessage
     */
    sendMessage: {
      name: "SendMessage",
      I: SendMessageRequest,
      O: SendMessageResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
