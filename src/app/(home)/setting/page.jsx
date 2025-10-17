"use client";
import React, { useEffect, useState } from "react";
import ProfileSettings from "@/components/Setting/AllSetting/ProfileSettings";
import { getProfile } from "@/services/userSettingService";

export default function SettingsPage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return <ProfileSettings profile={profile} />;
}
