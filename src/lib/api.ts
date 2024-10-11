export const API_BASE_URL = process.env.NEXT_PUBLIC_APIBASEURL;
export const API_BASE_IMG_URL = process.env.NEXT_PUBLIC_APIBASEIMGURL;
export const API_KEY = process.env.NEXT_PUBLIC_APIKEY;
export const API_READ_ACCESS_TOKEN = process.env.NEXT_PUBLIC_APIREADACCESSTOKEN;

export function handleFetchApiError(action: string, statusText: string) {
  throw new Error(`Error while ${action}: ${statusText}`);
}
