import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { TVSeriesDetails } from '@/lib/type';
import axios from 'axios';

export async function fetchTVSeriesDetailsById(tvSeriesId: number): Promise<TVSeriesDetails | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/${API_BASE_URL_VERSION}/tv/${tvSeriesId}?api_key=${API_KEY}`);

    if (res.status !== 200) {
      handleFetchApiError('fetch tv series details by id', res.statusText);
    }

    return res.data;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return null;
  }
}
