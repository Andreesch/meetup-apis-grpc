// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file chatbot/ricabot/service.proto (package chatbot.ricabot, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * The author of a message.
 *
 * @generated from enum chatbot.ricabot.Author
 */
export enum Author {
  /**
   * Unspecified - should not be used.
   *
   * @generated from enum value: AUTHOR_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The user.
   *
   * @generated from enum value: AUTHOR_USER = 1;
   */
  USER = 1,

  /**
   * The bot.
   *
   * @generated from enum value: AUTHOR_BOT = 2;
   */
  BOT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Author)
proto3.util.setEnumType(Author, "chatbot.ricabot.Author", [
  { no: 0, name: "AUTHOR_UNSPECIFIED" },
  { no: 1, name: "AUTHOR_USER" },
  { no: 2, name: "AUTHOR_BOT" },
]);

/**
 * Representa a request para o método CreateConversation
 *
 * @generated from message chatbot.ricabot.CreateConversationRequest
 */
export class CreateConversationRequest extends Message$1<CreateConversationRequest> {
  /**
   * The user's email address. This can be used to send the summary of the conversation to the user.
   *
   * @generated from field: string email = 1;
   */
  email = "";

  constructor(data?: PartialMessage<CreateConversationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.CreateConversationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConversationRequest {
    return new CreateConversationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConversationRequest {
    return new CreateConversationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConversationRequest {
    return new CreateConversationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateConversationRequest | PlainMessage<CreateConversationRequest> | undefined, b: CreateConversationRequest | PlainMessage<CreateConversationRequest> | undefined): boolean {
    return proto3.util.equals(CreateConversationRequest, a, b);
  }
}

/**
 * The response message for the CreateConversation method.
 *
 * @generated from message chatbot.ricabot.CreateConversationResponse
 */
export class CreateConversationResponse extends Message$1<CreateConversationResponse> {
  /**
   * The conversation that was created.
   *
   * @generated from field: chatbot.ricabot.Conversation conversation = 1;
   */
  conversation?: Conversation;

  constructor(data?: PartialMessage<CreateConversationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.CreateConversationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation", kind: "message", T: Conversation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConversationResponse {
    return new CreateConversationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConversationResponse {
    return new CreateConversationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConversationResponse {
    return new CreateConversationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateConversationResponse | PlainMessage<CreateConversationResponse> | undefined, b: CreateConversationResponse | PlainMessage<CreateConversationResponse> | undefined): boolean {
    return proto3.util.equals(CreateConversationResponse, a, b);
  }
}

/**
 * The request message for the GetConversation method.
 *
 * @generated from message chatbot.ricabot.GetConversationRequest
 */
export class GetConversationRequest extends Message$1<GetConversationRequest> {
  /**
   * The conversation to retrieve.
   *
   * @generated from field: string conversation_id = 1;
   */
  conversationId = "";

  constructor(data?: PartialMessage<GetConversationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.GetConversationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConversationRequest {
    return new GetConversationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConversationRequest {
    return new GetConversationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConversationRequest {
    return new GetConversationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetConversationRequest | PlainMessage<GetConversationRequest> | undefined, b: GetConversationRequest | PlainMessage<GetConversationRequest> | undefined): boolean {
    return proto3.util.equals(GetConversationRequest, a, b);
  }
}

/**
 * The response message for the GetConversation method.
 *
 * @generated from message chatbot.ricabot.GetConversationResponse
 */
export class GetConversationResponse extends Message$1<GetConversationResponse> {
  /**
   * The conversation that was retrieved.
   *
   * @generated from field: chatbot.ricabot.Conversation conversation = 1;
   */
  conversation?: Conversation;

  constructor(data?: PartialMessage<GetConversationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.GetConversationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation", kind: "message", T: Conversation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConversationResponse {
    return new GetConversationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConversationResponse {
    return new GetConversationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConversationResponse {
    return new GetConversationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetConversationResponse | PlainMessage<GetConversationResponse> | undefined, b: GetConversationResponse | PlainMessage<GetConversationResponse> | undefined): boolean {
    return proto3.util.equals(GetConversationResponse, a, b);
  }
}

/**
 * The request message for the SendMessage method.
 *
 * @generated from message chatbot.ricabot.SendMessageRequest
 */
export class SendMessageRequest extends Message$1<SendMessageRequest> {
  /**
   * The conversation to send a message to.
   *
   * @generated from field: string conversation_id = 1;
   */
  conversationId = "";

  /**
   * The message to send.
   *
   * @generated from field: chatbot.ricabot.Message message = 2;
   */
  message?: Message;

  constructor(data?: PartialMessage<SendMessageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.SendMessageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "message", T: Message },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendMessageRequest {
    return new SendMessageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendMessageRequest {
    return new SendMessageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendMessageRequest {
    return new SendMessageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendMessageRequest | PlainMessage<SendMessageRequest> | undefined, b: SendMessageRequest | PlainMessage<SendMessageRequest> | undefined): boolean {
    return proto3.util.equals(SendMessageRequest, a, b);
  }
}

/**
 * The response message for the SendMessage method.
 *
 * @generated from message chatbot.ricabot.SendMessageResponse
 */
export class SendMessageResponse extends Message$1<SendMessageResponse> {
  /**
   * The message that was sent back to the user. This will always be a message from the bot.
   *
   * @generated from field: chatbot.ricabot.Message message = 1;
   */
  message?: Message;

  constructor(data?: PartialMessage<SendMessageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.SendMessageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "message", T: Message },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendMessageResponse {
    return new SendMessageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendMessageResponse {
    return new SendMessageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendMessageResponse {
    return new SendMessageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendMessageResponse | PlainMessage<SendMessageResponse> | undefined, b: SendMessageResponse | PlainMessage<SendMessageResponse> | undefined): boolean {
    return proto3.util.equals(SendMessageResponse, a, b);
  }
}

/**
 * A conversation between the user and the bot.
 *
 * @generated from message chatbot.ricabot.Conversation
 */
export class Conversation extends Message$1<Conversation> {
  /**
   * The conversation's unique identifier.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The time at which the conversation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The user's email address. This can be used to send the summary of the conversation to the user.
   *
   * @generated from field: string email = 3;
   */
  email = "";

  /**
   * The messages in this conversation in chronological order.
   *
   * @generated from field: repeated chatbot.ricabot.Message messages = 4;
   */
  messages: Message[] = [];

  constructor(data?: PartialMessage<Conversation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.Conversation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "messages", kind: "message", T: Message, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Conversation {
    return new Conversation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Conversation {
    return new Conversation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Conversation {
    return new Conversation().fromJsonString(jsonString, options);
  }

  static equals(a: Conversation | PlainMessage<Conversation> | undefined, b: Conversation | PlainMessage<Conversation> | undefined): boolean {
    return proto3.util.equals(Conversation, a, b);
  }
}

/**
 * A message in a conversation.
 *
 * @generated from message chatbot.ricabot.Message
 */
export class Message extends Message$1<Message> {
  /**
   * The message's unique identifier.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The time at which the message was sent.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The author of the message, either the user or the bot.
   *
   * @generated from field: chatbot.ricabot.Author author = 3;
   */
  author = Author.UNSPECIFIED;

  /**
   * The content of the message.
   *
   * @generated from field: string content = 4;
   */
  content = "";

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "chatbot.ricabot.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 3, name: "author", kind: "enum", T: proto3.getEnumType(Author) },
    { no: 4, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}
