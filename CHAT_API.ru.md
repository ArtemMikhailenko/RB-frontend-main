# Полная спецификация API чатов (RU)

Подтверждаю: спецификация и пример сервера теперь в репозитории.

- Полная спецификация (этот файл): CHAT_API.ru.md
- Короткая спека + пример сервера (Express + Socket.IO): docs/chat-backend.md
- Вариант реализации на NestJS (структура для ориентира): src/chat/*
  - chat.controller.ts — REST
  - chat.gateway.ts — Socket.IO
  - chat.service.ts — логика и БД
  - presence.service.ts — онлайн‑статусы

Ниже — точные контракты, под которые должен работать фронтенд (`/chat`).

## Аутентификация
- Все REST-запросы: заголовок `Authorization: Bearer <JWT>`.
- Socket.IO подключение:
  - `transports: ['websocket']`
  - `withCredentials: true`
  - `auth: { token: localStorage.getItem('access_token') }`
  - (либо принять событие `register` после подключения)

## REST

### GET /chat/users
Возвращает список пользователей для левой панели.

Ответ: массив объектов
- `{ id, name, email, avatarUrl, online, lastMessage }`
- `lastMessage`: `{ id, fromUserId, toUserId, text, ts, read } | null`

### GET /chat/history?peerId=:id&offset=0&limit=50
Возвращает историю сообщений с указанным пользователем.

Ответ:
```json
{
  "items": [
    { "id": "...", "fromUserId": 1, "toUserId": 2, "text": "Привет", "ts": "2025-11-01T10:20:30.000Z", "read": false }
  ]
}
```
Порядок: по времени ASC (от старых к новым).

### POST /chat/mark-read
Тело:
```json
{ "peerId": 2, "upTo": "2025-11-01T10:20:30.000Z" }
```
Ответ:
```json
{ "updated": 3 }
```

## Socket.IO события

### Отправка сообщения
- emit `chat:message`
  - Пэйлоад от клиента: `{ toUserId, text, clientId? }`
  - `clientId` — необязательный идентификатор на клиенте для согласования ответов/статусов.

### Получение сообщения
- on `chat:message`
  - Сервер присылает: `{ id, fromUserId, toUserId, text, ts, read }`

### Индикатор набора (опционально)
- emit `chat:typing` — `{ toUserId }`
- on `chat:typing` — `{ fromUserId }`

### Прочтения (опционально)
- emit `chat:read` — `{ peerId, upTo? }`
- on `chat:read` — `{ fromUserId, toUserId, upTo? }`

## Замечания по серверу
- На `chat:message` сервер обязан:
  1) Провалидировать отправителя (из токена/регистрации)
  2) Сохранить сообщение в БД
  3) Эмитить `chat:message` отправителю и получателю
- Статусы online считать по активным socket.id пользователей (Map userId -> Set<socketId>)
- Историю и список пользователей кешировать по необходимости

---

Фронтенд `/chat` готов к этим контрактам. При изменении имён путей/полей — сообщите, обновлю клиент.
