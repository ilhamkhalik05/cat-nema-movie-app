import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { TVSeries } from '@/lib/type';
import axios from 'axios';

export async function fetchNowPlayingTVSeries(): Promise<TVSeries[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/tv/airing_today?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch now playing tv series', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
