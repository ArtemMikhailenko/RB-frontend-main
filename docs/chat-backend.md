# Спецификация бэкенда для приватных чатов

Этот документ описывает минимальный контракт API и Socket.IO событий, с которыми уже интегрирован фронтенд (/chat). Язык: RU.

Фронтенд ожидает:
- REST:
  - GET /chat/users — список пользователей для левой панели
  - GET /chat/history?peerId=:id&limit=50&offset=0 — история с выбранным собеседником
  - POST /chat/mark-read — отметить прочитанным (опционально)
- Socket.IO:
  - emit "chat:message" для отправки
  - on   "chat:message" для получения
  - (опционально) chat:typing, chat:read

Фронтенд уже настроен на переменную окружения NEXT_PUBLIC_API_URL (пример: http://localhost:3000).

## Аутентификация
- REST: JWT в заголовке Authorization: `Bearer <token>`.
- Socket.IO: два варианта (любой подойдёт):
  1) Принимать событие `register` с `userId` (фронт уже эмитит register после логина).
  2) Передавать JWT в socket.handshake (auth/query) и извлекать `userId` на сервере.

Минимальные требования:
- Отображать статус online, регистрируя соответствие `userId -> socket.id[]`.
- Проверять, что отправитель события `chat:message` соответствует аутентифицированному пользователю.

## REST эндпоинты

### GET /chat/users
Список пользователей для левой колонки.

Ответ 200 JSON (массив объектов):
```json
[
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "avatarUrl": "",
    "online": true,
    "lastMessage": { "text": "Привет", "ts": "2025-11-01T10:20:30.000Z" }
  }
]
```
Примечания:
- `online` вычисляется по наличию активных сокетов у пользователя.
- `lastMessage` опционально (для визуального улучшения списка).

### GET /chat/history
История сообщений c конкретным собеседником:

Параметры query:
- `peerId` — обязательный, id собеседника
- `limit` — по умолчанию 50
- `offset` — по умолчанию 0

Ответ 200 JSON (порядок — по времени ASC):
```json
{
  "items": [
    {
      "id": "msg-1",
      "fromUserId": 1,
      "toUserId": 2,
      "text": "Hello",
      "ts": "2025-11-01T10:20:30.000Z",
      "read": false
    }
  ]
}
```

### POST /chat/mark-read (опционально)
Тело:
```json
{ "peerId": 2, "upTo": "2025-11-01T10:20:30.000Z" }
```
Ответ 200:
```json
{ "updated": 3 }
```

### (Опционально) GET /chat/conversations
Список последних диалогов с последним сообщением и счётчиками непрочитанных.

## Socket.IO события

### chat:message
Фронтенд отправляет:
```json
{
  "id": 1698840000000,
  "fromUserId": 1,
  "toUserId": 2,
  "text": "Привет",
  "ts": "2025-11-01T10:20:30.000Z"
}
```
Сервер обязан:
1) Проверить, что `fromUserId` соответствует пользователю сокета.
2) Сохранить сообщение в БД.
3) Эмитить `chat:message` отправителю и получателю (всем их сокетам).

Клиент принимает то же событие `chat:message` с тем же payload.

### (Опционально) chat:typing
- emit: `{ "toUserId": 2 }`
- on: показать индикатор "печатает…"

### (Опционально) chat:read
- on: `{ "fromUserId": 1, "toUserId": 2, "readAt": "...", "upTo": "msg-10" }`

## Модель данных (минимально)
- users: `id`, `name`, `email`, `avatarUrl` ...
- messages:
  - `id` (uuid или snowflake)
  - `fromUserId` (FK users.id)
  - `toUserId` (FK users.id)
  - `text` (text)
  - `ts` (timestamp with tz, default now())
  - `read` (boolean, default false)
- (опц.) conversations: нормализованные пары пользователей с `lastMessageId` и `unreadCount`

Индексы:
- messages: `(fromUserId, toUserId, ts)`, `(toUserId, read)`
- conversations: `unique(userAId, userBId)` (упорядочивать через min/max)

## Короткий пример сервера (Express + Socket.IO)
См. упрощённый пример в сообщении ассистента (app.js). Ключевые моменты:
- CORS: origin фронта
- Socket.IO: `transports: ['websocket']`
- Маппинг `userId -> socket.id[]`
- Проверка авторства сообщений
- Доставка события обеим сторонам

## Ошибки и кейсы
- Получатель офлайн → просто сохраняем в БД; доставим при следующем подключении (или через push).
- Несколько вкладок → хранить несколько socket.id на пользователя.
- Rate limit → ограничения на частоту сообщений.
- Пагинация истории → limit/offset; можно сделать keyset по ts/id.

## Что нужно фронту прямо сейчас
- Реализуйте:
  - GET `/chat/users`
  - GET `/chat/history?peerId=:id&limit=50`
  - Socket событие `chat:message` (приём/отправка)
- Опционально: POST `/chat/mark-read`, socket `chat:typing`, `chat:read`.

## Тестирование локально
1) Убедитесь, что API и сокет работают на `NEXT_PUBLIC_API_URL`.
2) В фронте `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```
3) Авторизуйтесь, откройте `/chat`. Выберите пользователя → история загрузится. Напишите сообщение → событие уйдёт и вернётся в UI.
