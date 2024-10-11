import { API_BASE_URL, API_KEY } from '@/lib/api';
import { TVSeries } from '@/lib/type';
import axios from 'axios';

export async function fetchNowPlayingTv(): Promise<TVSeries[] | []> {
  try {
    const res = await axios.get(`${API_BASE_URL}/tv/airing_today?api_key=${API_KEY}`);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch now playing tv series: ${res.statusText}`);
    }

    return res.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
