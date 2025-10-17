// src/context/AuthContext.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { apiClient } from "@/libs/apiClient";
import { registerSocket } from "@/libs/socket";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await apiClient.get("/profile");
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  // Register socket after user is set
  useEffect(() => {
    if (!user) return;
    const id = user.id || user.userId || user?.profile?.id; // be defensive about shape
    if (id) {
      try {
        registerSocket(id);
      } catch (e) {
        // optional: log but don't break UI
        console.warn("Socket registration failed:", e);
      }
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
