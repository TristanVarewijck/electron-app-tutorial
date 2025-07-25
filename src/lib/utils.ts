import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHtmlTags(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
}
