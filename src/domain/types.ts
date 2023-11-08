export interface Message {
    id: string;
    createdAt: Date;
    role: "user" | "bot";
    content: string;
  }
  
  export interface Conversation {
    id: string;
    createdAt: Date;
    email: string;
    messages: Message[];
  }