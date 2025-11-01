"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

export default function ChatUserList({ users = [], selectedUserId, onSelect }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return users;
    return users.filter((u) => (u.name || u.email || "").toLowerCase().includes(s));
  }, [q, users]);

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск пользователей"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 && (
          <div className="text-sm text-gray-500 px-3">Ничего не найдено</div>
        )}
        {filtered.map((u) => (
          <button
            type="button"
            key={u.id}
            onClick={() => onSelect?.(u)}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 ${
              selectedUserId === u.id ? "bg-gray-100" : ""
            }`}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              {u.avatar ? (
                <Image src={u.avatar} alt={u.name || u.email || ""} fill className="object-cover" />
              ) : null}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{u.name || u.email || `User ${u.id}`}</div>
              {u.lastMessage && (
                <div className="text-xs text-gray-500 truncate">{u.lastMessage.text}</div>
              )}
            </div>
            {u.online && <span className="w-2 h-2 rounded-full bg-green-500" />}
          </button>
        ))}
      </div>
    </div>
  );
}
