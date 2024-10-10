import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { API_BASE_IMG_URL } from './api';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiImage(imageSrc: string) {
  return `${API_BASE_IMG_URL}/${imageSrc}`;
}
