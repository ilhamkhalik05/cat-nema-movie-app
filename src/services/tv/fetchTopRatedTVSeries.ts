import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { TVSeries } from '@/lib/type';
import axios from 'axios';

export async function fetchTopRatedTVSeries(): Promise<TVSeries[]> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/tv/top_rated?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch top rated tv series', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
}
