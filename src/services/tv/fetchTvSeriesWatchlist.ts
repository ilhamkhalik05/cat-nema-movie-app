import type { TVSeries } from '@/lib/type';
import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { cache } from 'react';
import axios from 'axios';

export const fetchTvSeriesWatchlist = cache(async (sessionId: string): Promise<TVSeries[]> => {
  try {
    const endpoint = `${API_BASE_URL}/${API_BASE_URL_VERSION}/account/null/watchlist/tv?session_id=${sessionId}&sort_by=created_at.asc&api_key=${API_KEY}`;

    const res = await axios.get(endpoint);

    if (res.status !== 200) {
      handleFetchApiError('fetch user tv series watchlist', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
});
