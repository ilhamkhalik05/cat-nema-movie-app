import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { Movie } from '@/lib/type';
import axios from 'axios';

export async function fetchMovieWatchlist(sessionId: string): Promise<Movie[]> {
  try {
    const url = `${API_BASE_URL}/${API_BASE_URL_VERSION}/account/null/watchlist/movies?session_id=${sessionId}&sort_by=created_at.asc&api_key=${API_KEY}`;

    const res = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status !== 200) {
      handleFetchApiError('fetch user movie watchlist', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
}
