import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { Movie } from '@/lib/type';
import axios from 'axios';

export async function fetchPopularMovies(): Promise<Movie[]> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/movie/popular?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch popular movies', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];;
  }
}
