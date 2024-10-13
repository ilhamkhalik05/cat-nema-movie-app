import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY, handleFetchApiError } from '@/lib/api';
import { Movie } from '@/lib/type';
import axios from 'axios';

export async function fetchNowPlayingMovies(): Promise<Movie[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/movie/now_playing?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch now playing movies', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
