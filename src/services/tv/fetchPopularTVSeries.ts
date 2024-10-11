import { API_BASE_URL, API_KEY, handleFetchApiError } from '@/lib/api';
import { TVSeries } from '@/lib/type';
import axios from 'axios';

export async function fetchPopularTVSeries(): Promise<TVSeries[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch popular tv series', res.statusText);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
