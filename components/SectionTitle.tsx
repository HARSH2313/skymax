// components/SectionTitle.tsx

import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignmentClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`mb-10 ${alignmentClass}`}>
      {subtitle && (
        <p className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      <div className="mt-2 h-1 w-20 mx-auto md:mx-0 bg-blue-600" />
    </div>
  );
}
