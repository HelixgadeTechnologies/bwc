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
    sm: "h-13 sm:h-15",
    md: "h-16 sm:h-18 md:h-20",
    lg: "h-20 sm:h-24",
  }[size];

  return (
    <div className={`flex items-center group ${className}`}>
      <Image
        src="/bwc.png"
        alt="Beyond Worship Center"
        width={270}
        height={234}
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}
        priority
      />
    </div>
  );
}
