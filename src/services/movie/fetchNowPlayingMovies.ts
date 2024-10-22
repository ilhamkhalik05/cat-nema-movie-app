import type { Movie } from '@/lib/type';
import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { cache } from 'react';
import axios from 'axios';

export const fetchNowPlayingMovies = cache(async (): Promise<Movie[] | []> => {
  try {
    const endpoint = `${API_BASE_URL}/${API_BASE_URL_VERSION}/movie/now_playing?api_key=${API_KEY}`;
    const res = await axios.get(endpoint);

    if (res.status !== 200) {
      handleFetchApiError('fetch now playing movies', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
});
