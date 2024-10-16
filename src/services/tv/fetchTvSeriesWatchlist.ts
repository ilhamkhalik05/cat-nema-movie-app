import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { TVSeries } from '@/lib/type';
import axios from 'axios';

export async function fetchTvSeriesWatchlist(sessionId: string): Promise<TVSeries[] | null> {
  try {
    const url = `${API_BASE_URL}/${API_BASE_URL_VERSION}/account/null/watchlist/tv?session_id=${sessionId}&sort_by=created_at.asc&api_key=${API_KEY}`;

    const res = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status !== 200) {
      handleFetchApiError('fetch user tv series watchlist', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}
