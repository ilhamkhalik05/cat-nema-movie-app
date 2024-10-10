import { API_BASE_URL, API_KEY } from '@/lib/api';
import { Movie } from '@/lib/type';
import axios from 'axios';

export async function fetchNowPlayingMovies(): Promise<Movie[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch now playing movies: ${res.statusText}`);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
