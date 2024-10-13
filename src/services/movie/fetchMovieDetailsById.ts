import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY, handleFetchApiError } from '@/lib/api';
import { MovieDetails } from '@/lib/type';
import axios from 'axios';

export async function fetchMovieDetailsById(movieId: number): Promise<MovieDetails | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/movie/${movieId}?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch movie details by id', res.statusText);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
