"use client";

import Image from "next/image";
import { useState } from "react";

const messages = ["Hello", "I am Tanuj", "..."];

export default function ProfileImage() {
  const [messageIndex, setMessageIndex] = useState(2);

  const handleProfileClick = () => {
    setMessageIndex((current) => {
      return (current + 1) % messages.length;
    });
  };

  const message =
    messageIndex >= 0 ? messages[messageIndex] : null;

  return (
    <div className="profile-image">
      {message && (
        <div
          key={messageIndex}
          className="profile-speech-bubble"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <button
        type="button"
        className="profile-image-button"
        onClick={handleProfileClick}
        aria-label="Show profile message"
      >
        <div className="profile-image-ring">
          <Image
            src="/profile-new.webp"
            alt="Tanuj Joshi"
            fill
            priority
            sizes="(max-width: 400px) 120px, (max-width: 767px) 145px, 250px"
            className="profile-image-photo"
          />
        </div>
      </button>
    </div>
  );
}