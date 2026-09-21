"use client";

import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="profile-image">
      <div className="profile-image-ring">
        <Image
          src="/profile.webp"
          alt="Tanuj Joshi"
          fill
          priority
          sizes="(max-width: 400px) 120px, (max-width: 767px) 145px, 250px"
          className="profile-image-photo"
        />
      </div>
    </div>
  );
}