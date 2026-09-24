"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", light = true, size = "md" }: BrandLogoProps) {
  const heightClasses = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12 md:h-13",
    lg: "h-14 sm:h-16",
  }[size];

  return (
    <div className={`flex items-center group ${className}`}>
      <Image
        src="/bwc.png"
        alt="Beyond Worship Center"
        width={180}
        height={156}
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}
        priority
      />
    </div>
  );
}
