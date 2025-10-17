"use client";
import React, { useState, useEffect } from "react";
import { updateProfile } from "@/services/profileSetting";
import HeaderSection from "./sections/HeaderSection";
import PersonalInformation from "./sections/PersonalInformation";
import ContactInformation from "./sections/ContactInformation";
import PreferencesSection from "./sections/PreferencesSection";
import PasswordSection from "./sections/PasswordSection";
import SocialProfilesSection from "./sections/SocialProfilesSection";
import FeedbackMessage from "./sections/FeedbackMessage";

const ProfileInformation = ({ profile }) => {
  const initialSocialProfiles = {
    LinkedIn: profile?.linkedIn?.trim() || "",
    Twitter: profile?.twitter?.trim() || "",
    Facebook: profile?.facebook?.trim() || "",
    Instagram: profile?.instagram?.trim() || "",
    TikTok: profile?.tiktok?.trim() || "",
    WhatsApp: profile?.whatsapp?.trim() || "",
    Viber: profile?.viber?.trim() || "",
    Telegram: profile?.telegram?.trim() || "",
  };

  // Store raw file for upload
  const [profileImage, setProfileImage] = useState(null);

  // Store preview URL (string)
  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    timezone: "",
    socialProfiles: initialSocialProfiles,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Populate form data and preview image when profile loads
  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile?.user?.firstName?.trim() || "",
        lastName: profile?.user?.lastName?.trim() || "",
        provider: profile?.user?.provider || "local",
        email: profile?.user?.email?.trim() || "",
        phone: profile?.phone?.trim() || "",
        language: profile?.language?.trim() || "",
        timezone: profile?.timezone?.trim() || "",
        socialProfiles: initialSocialProfiles,
      });

      setPreviewImage(
        profile?.user?.profilePicUrl?.trim() || "/images/default-profile.png"
      );
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("socialProfiles.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        socialProfiles: { ...prev.socialProfiles, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file); // keep for FormData
      setPreviewImage(URL.createObjectURL(file)); // update preview
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formDataToSend = new FormData();

      // Append text fields
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("language", formData.language);
      formDataToSend.append("timezone", formData.timezone);

      // Append social profiles
      Object.entries(formData.socialProfiles).forEach(([key, value]) => {
        // map frontend keys to entity keys
        const keyMapping = {
          LinkedIn: "linkedIn",
          Twitter: "twitter",
          Facebook: "facebook",
          Instagram: "instagram",
          TikTok: "tiktok",
          WhatsApp: "whatsapp",
          Viber: "viber",
          Telegram: "telegram",
        };

        const entityKey = keyMapping[key];
        if (entityKey) formDataToSend.append(entityKey, value);
      });

      // Append file if selected
      if (profileImage) {
        formDataToSend.append("profilePic", profileImage);
      }

      await updateProfile(formDataToSend, true); // your API call
      setSuccess("Profile updated successfully!");
    } catch (err) {
      setError(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center sm:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        <HeaderSection loading={loading} onSave={handleSubmit} />

        <PersonalInformation
          formData={formData}
          profileImage={previewImage} // always a URL string
          onChange={handleInputChange}
          onImageChange={handleImageChange}
        />
        <ContactInformation formData={formData} onChange={handleInputChange} />
        <PreferencesSection formData={formData} onChange={handleInputChange} />
        {formData.provider === "local" && (
          <PasswordSection />
        )}
        <SocialProfilesSection
          formData={formData}
          onChange={handleInputChange}
        />

        <FeedbackMessage error={error} success={success} />
      </div>
    </div>
  );
};

export default ProfileInformation;
