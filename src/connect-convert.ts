import { Timestamp } from "@bufbuild/protobuf";

import * as pb from "../gen/chatbot/ricabot/service_pb";

import type { Conversation, Message } from "./domain/types";

export const convertConversationToPb = (
  conversation: Conversation,
): pb.Conversation => {
  return new pb.Conversation({
    id: conversation.id,
    createTime: Timestamp.fromDate(conversation.createdAt),
    email: conversation.email,
    messages: conversation.messages.map(convertMessageToPb),
  });
};

export const convertMessageToPb = (message: Message): pb.Message => {
  return new pb.Message({
    id: message.id,
    createTime: Timestamp.fromDate(message.createdAt),
    author: convertRoleToAuthor(message.role),
    content: message.content,
  });
};

export const convertRoleToAuthor = (role: string): pb.Author => {
  switch (role) {
    case "user":
      return pb.Author.USER;
    case "bot":
      return pb.Author.BOT;
    default:
      return pb.Author.UNSPECIFIED;
  }
};
