"use client";
import React, { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onSend?.(text);
    setInput("");
  };

  return (
    <form onSubmit={submit} className="p-3 border-t bg-white flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите сообщение"
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
        disabled={disabled}
      />
      <button type="submit" disabled={disabled} className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50">
        Отправить
      </button>
    </form>
  );
}
