
# meetup-apis-grpc

Repositório com o código de demonstração a ser utilizado na palestra no 2º Meetup - API Joinville - Asaas.


## Rodando localmente
```javascript
npm install
npx tsx server.ts
```

## Requisições para teste

```javascript
curl \
  --header 'Content-Type: application/json' \
  --data '{"email": "ricabot@motoristapx.com.br"}' \
   http://localhost:8080/chatbot.ricabot.ChatbotService/CreateConversation

curl \
  --header 'Content-Type: application/json' \
  --data '{"conversation_id": "{conversation_id}"}' \
   http://localhost:8080/chatbot.ricabot.ChatbotService/GetConversation

curl \
  --header 'Content-Type: application/json' \
  --data '{"conversation_id": "{conversation_id}", "message": {"content": "Meu nome é Ricabot. Em que posso te ajudar motora?"}}' \
   http://localhost:8080/chatbot.ricabot.ChatbotService/SendMessage

