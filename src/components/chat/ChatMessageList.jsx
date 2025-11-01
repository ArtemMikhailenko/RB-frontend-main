"use client";
import React, { useEffect, useRef } from "react";

export default function ChatMessageList({ messages = [], selfId }) {
  const listRef = useRef(null);
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFAFA]">
      {messages.length === 0 && (
        <div className="text-center text-sm text-gray-500 mt-10">Нет сообщений. Напишите первым!</div>
      )}
      {messages.map((m) => {
        const isSelf = m.self || m.fromUserId === selfId || m.userId === selfId;
        return (
          <div
            key={m.id}
            className={`max-w-[75%] px-3 py-2 rounded-lg ${isSelf ? "ml-auto bg-black text-white" : "bg-white border"}`}
          >
            {!isSelf && m.name && (
              <div className="text-xs text-gray-500 mb-1">{m.name}</div>
            )}
            <div className="text-sm">{m.text}</div>
            {m.ts && (
              <div className="text-[10px] text-gray-400 mt-1">{new Date(m.ts).toLocaleTimeString()}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
