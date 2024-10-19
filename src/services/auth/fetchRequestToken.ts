import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import axios from 'axios';

export async function fetchRequestToken(): Promise<string | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/authentication/token/new?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('get auth request token', res.statusText);
    }

    return res.data.request_token;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return null;
  }
}
