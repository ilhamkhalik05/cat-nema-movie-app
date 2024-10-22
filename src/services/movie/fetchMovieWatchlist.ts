import type { Movie } from '@/lib/type';
import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { cache } from 'react';
import axios from 'axios';

export const fetchMovieWatchlist = cache(async (sessionId: string): Promise<Movie[] | []> => {
  try {
    const endpoint = `${API_BASE_URL}/${API_BASE_URL_VERSION}/account/null/watchlist/movies?session_id=${sessionId}&sort_by=created_at.asc&api_key=${API_KEY}`;

    const res = await axios.get(endpoint);

    if (res.status !== 200) {
      handleFetchApiError('fetch user movie watchlist', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
});
