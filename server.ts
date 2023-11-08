import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";

import createRoutes from "./src/connect";
import { MemoryConversationService } from "./src/conversations/memory";

const conversationService = new MemoryConversationService();

async function main() {
  const server = fastify();

  await server.register(fastifyConnectPlugin, {
    routes: createRoutes(conversationService),
  });

  server.get("/health", (_, reply) => {
    reply.type("text/plain");
    reply.send("OK");
  });

  await server.listen({ host: "localhost", port: 8080 });

  console.log("server is listening at", server.addresses());
}

void main();
