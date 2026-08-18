import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pick(obj: any, keys: string[]) {
  return keys.reduce((ret, key) => {
    if (key in obj) {
      ret[key] = obj[key];
    }

    return ret;
  }, {} as any);
}
