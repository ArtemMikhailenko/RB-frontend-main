"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import { getSocket } from "@/libs/socket";
import { apiClient } from "@/libs/apiClient";
import ChatUserList from "@/components/chat/ChatUserList";
import ChatMessageList from "@/components/chat/ChatMessageList";
import ChatInput from "@/components/chat/ChatInput";

export default function ChatPage() {
  const { user, loading } = useAuth();
  const selfId = user?.id || user?.userId;
  const [connected, setConnected] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messagesByUser, setMessagesByUser] = useState({}); // { [peerId]: Message[] }

  // Load users list
  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    (async () => {
      try {
        // Prefer chat-specific endpoint if available
        const { data } = await apiClient.get("/chat/users");
        if (!cancelled) setUsers(normalizeUsers(data));
      } catch (e) {
        try {
          const { data } = await apiClient.get("/users");
          if (!cancelled) setUsers(normalizeUsers(data));
        } catch (e2) {
          try {
            const { data } = await apiClient.get("/api/users");
            if (!cancelled) setUsers(normalizeUsers(data));
          } catch (e3) {
            if (!cancelled) setUsers([]);
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [loading]);

  // Socket wiring
  useEffect(() => {
    if (loading) return;
    const socket = getSocket();
    // На всякий случай регистрируем пользователя на сокете
    if (selfId) socket.emit('register', selfId);

    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    const onMessage = (msg) => {
      // msg: { id, fromUserId, toUserId, text, ts, name? }
      const from = msg.fromUserId ?? msg.userId; // fallback to previous naming
      const to = msg.toUserId;
      const peerId = from === selfId ? to : from;
      setMessagesByUser((prev) => {
        const arr = prev[peerId] ? [...prev[peerId]] : [];
        const isSelf = from === selfId;
        arr.push({ ...msg, self: isSelf });
        return { ...prev, [peerId]: arr };
      });
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("chat:message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("chat:message", onMessage);
    };
  }, [loading, selfId]);

  // Load history when selecting a user
  useEffect(() => {
    if (loading) return;
    if (!selectedUser) return;
    const peerId = selectedUser.id;
    // If already have some messages, skip or you can implement pagination
    if (messagesByUser[peerId]?.length) return;
    let cancelled = false;
    (async () => {
      try {
        const { data } = await apiClient.get("/chat/history", {
          params: { peerId, limit: 50 },
        });
        if (!cancelled) {
          const arr = normalizeMessages(data, selfId);
          setMessagesByUser((prev) => ({ ...prev, [peerId]: arr }));
        }
      } catch (e) {
        // silently ignore for now
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedUser, loading, selfId, messagesByUser]);

  const selectedMessages = useMemo(() => {
    if (!selectedUser) return [];
    return messagesByUser[selectedUser.id] || [];
  }, [messagesByUser, selectedUser]);

  if (loading) return <div className="p-6">Загрузка...</div>;
  if (!user) return <div className="p-6">Войдите, чтобы использовать чат.</div>;
  const handleSend = (text) => {
    if (!selectedUser || !text) return;
    const socket = getSocket();
    const msg = {
      id: Date.now(),
      fromUserId: selfId,
      toUserId: selectedUser.id,
      name: user.name || user.email,
      text,
      ts: new Date().toISOString(),
    };
    socket.emit("chat:message", msg);
    setMessagesByUser((prev) => {
      const arr = prev[selectedUser.id] ? [...prev[selectedUser.id]] : [];
      arr.push({ ...msg, self: true });
      return { ...prev, [selectedUser.id]: arr };
    });
  };

  return (
    <div className="h-[calc(100vh-120px)] max-w-6xl mx-auto bg-white border rounded-md overflow-hidden grid grid-cols-12">
      <div className="col-span-4 min-w-[280px]">
        <div className="px-4 py-3 border-b">
          <div className="text-lg font-semibold">Чаты</div>
          <div className="text-xs text-gray-500">{connected ? "Онлайн" : "Офлайн"}</div>
        </div>
        <ChatUserList
          users={users.filter((u) => u.id !== selfId)}
          selectedUserId={selectedUser?.id}
          onSelect={setSelectedUser}
        />
      </div>
      <div className="col-span-8 flex flex-col">
        <div className="px-4 py-3 border-b">
          <div className="text-sm text-gray-500">Кому:</div>
          <div className="text-lg font-medium">{selectedUser?.name || selectedUser?.email || "Не выбран"}</div>
        </div>
        <ChatMessageList messages={selectedMessages} selfId={selfId} />
        <ChatInput onSend={handleSend} disabled={!selectedUser} />
      </div>
    </div>
  );
}

function normalizeUsers(data) {
  if (!Array.isArray(data)) return [];
  return data.map((u) => ({
    id: u.id ?? u.userId ?? u._id,
    name: u.name ?? `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim(),
    email: u.email,
    avatar: u.avatarUrl ?? u.avatar,
    online: u.online,
  })).filter((u) => !!u.id);
}

function normalizeMessages(data, selfId) {
  if (!Array.isArray(data)) return [];
  return data.map((m) => {
    const from = m.fromUserId ?? m.from ?? m.authorId;
    const to = m.toUserId ?? m.to ?? m.recipientId;
    return {
      id: m.id ?? m._id ?? `${Date.now()}-${Math.random()}`,
      fromUserId: from,
      toUserId: to,
      text: m.text ?? m.body ?? "",
      ts: m.ts ?? m.createdAt ?? new Date().toISOString(),
      self: from === selfId,
      name: m.name,
      read: m.read,
    };
  });
}
