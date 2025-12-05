"use client";

import { ReactNode } from "react";
import { HiCheck } from "react-icons/hi";

interface ContentBoxProps {
  children?: ReactNode;
  subtitle?: string;
  paragraph?: string;
  checks?: string[];
  image?: string;
  className?: string;
  reverse?: boolean;
}

export default function ContentBox({
  children,
  subtitle,
  paragraph,
  checks,
  image,
  className,
  reverse,
}: ContentBoxProps) {
  return (
    <div
      className={`p-2 bg-[#18181B] rounded-lg flex items-start gap-6 ${reverse ? "flex-row-reverse" : "flex-row"} ${className} 
      max-lg:flex-col max-lg:items-center`}
    >
      <div className="flex-1 p-7 max-lg:p-4">
        {subtitle && (
          <h2 className="text-3xl font-bold mb-2 text-white max-lg:text-2xl text-left">
            {subtitle}
          </h2>
        )}

        {paragraph && (
          <p className="text-md text-gray-300 mb-6 max-lg:text-sm text-justify">
            {paragraph}
          </p>
        )}

        {checks && (
          <div className="space-y-3 max-lg:space-y-2">
            {checks.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <HiCheck className="text-gray-400 text-sm" />
                </div>
                <p className="text-gray-300 text-sm md:text-base max-lg:text-xs text-justify">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>

      {image && (
        <div className="h-full flex items-center justify-center max-lg:w-full">
          <img
            src={image}
            alt=""
            className="h-full max-w-[550px] object-contain rounded-lg border-2 border-white/10 max-lg:max-w-full"
          />
        </div>
      )}
    </div>
  );
}