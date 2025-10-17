"use client";
import React, { useEffect, useState } from "react";
import { notificationPreferencesService } from "@/services/notificationService";

const NotificationsSetting = () => {
  const emailnotifications = [
    { key: "emailNewMessages", heading: "New messages", para: "Receive emails when new messages arrive" },
    { key: "emailTeamUpdates", heading: "Team updates", para: "Get notified about team member changes" },
    { key: "emailBillingAlerts", heading: "Billing alerts", para: "Receive billing and invoice notifications" },
    { key: "emailMarketing", heading: "Marketing emails", para: "Receive tips, product updates and offers" },
  ];

  const pushnotifications = [
    { key: "pushEnable", heading: "Enable push notifications", para: "Allow browser notifications" },
    { key: "pushNewMessages", heading: "New messages", para: "Show notifications for new messages" },
    { key: "pushTeamActivity", heading: "Team activity", para: "Notify about team member actions" },
  ];

  const smsnotifications = [
    { key: "smsSecurityAlerts", heading: "Security alerts", para: "Get notified about important security events" },
    { key: "smsAccountUpdates", heading: "Account updates", para: "Receive SMS for critical account changes" },
  ];

  const inappnotifications = [
    { key: "inAppSoundAlerts", heading: "Sound alerts", para: "Play a sound for new notifications" },
    { key: "inAppBadgeCounter", heading: "Badge counter", para: "Show unread notification count" },
  ];

  const [preferences, setPreferences] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch preferences on mount
  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const data = await notificationPreferencesService.getPreferences();
        setPreferences(data);
      } catch (err) {
        console.error("Failed to load preferences:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPreferences();
  }, []);

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleReset = () => {
    const reset = {};
    [...emailnotifications, ...pushnotifications, ...smsnotifications, ...inappnotifications].forEach(
      (item) => (reset[item.key] = false)
    );
    setPreferences(reset);
  };

  const handleSave = async () => {
    try {
      await notificationPreferencesService.updatePreferences(preferences);
      alert("Preferences saved successfully!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save preferences.");
    }
  };

  const renderNotificationGroup = (title, items) => (
    <div className="bg-white rounded-lg shadow-md sm:p-6 p-3 max-sm:py-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">{title}</h2>
      <div className="divide-y">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-6 py-3 border-[#E4E4E4]">
            <button
              onClick={() => togglePreference(item.key)}
              className={`min-w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-200 ${
                preferences[item.key] ? "bg-[#ED8F03]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-md transform duration-200 ${
                  preferences[item.key] ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
            <div>
              <p className="font-semibold text-gray-900 max-sm:text-sm">{item.heading}</p>
              <p className="sm:text-sm text-gray-500 text-xs">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) return <p className="text-center">Loading preferences...</p>;

  return (
    <div className="flex justify-center md:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 gap-5">
          <div className="text-xl font-semibold text-gray-800">
            Notification Preferences
            <p className="text-sm text-gray-500 font-light">
              Manage how and when you receive notifications.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 text-sm font-medium text-black bg-[#c2c0c0] rounded hover:bg-gray-300"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>

        {/* Notification Groups */}
        {renderNotificationGroup("Email Notifications", emailnotifications)}
        {renderNotificationGroup("Push Notifications", pushnotifications)}
        {renderNotificationGroup("SMS Notifications", smsnotifications)}
        {renderNotificationGroup("In-App Notifications", inappnotifications)}
      </div>
    </div>
  );
};

export default NotificationsSetting;
