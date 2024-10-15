import { API_BASE_IMG_URL } from "./env";

export function getApiImage(imageSrc: string) {
  return `${API_BASE_IMG_URL}/${imageSrc}`;
}

export function handleFetchApiError(action: string, statusText: string) {
  throw new Error(`Error while ${action}: ${statusText}`);
}
