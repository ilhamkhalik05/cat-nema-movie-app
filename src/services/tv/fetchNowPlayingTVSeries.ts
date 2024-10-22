import type { TVSeries } from '@/lib/type';
import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { cache } from 'react';
import axios from 'axios';

export const fetchNowPlayingTVSeries = cache(async (): Promise<TVSeries[]> => {
  try {
    const endpoint = `${API_BASE_URL}/${API_BASE_URL_VERSION}/tv/airing_today?api_key=${API_KEY}`;
    const res = await axios.get(endpoint);

    if (res.status !== 200) {
      handleFetchApiError('fetch now playing tv series', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
});
