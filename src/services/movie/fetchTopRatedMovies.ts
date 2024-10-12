import { API_BASE_URL, API_KEY, handleFetchApiError } from '@/lib/api';
import { Movie } from '@/lib/type';
import axios from 'axios';

export async function fetchTopRatedMovies(): Promise<Movie[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch top rated movies', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
