import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import { getOptimizedBannerImage } from '../utils';
import axios from 'axios';

export async function fetchMovieBannerImageSrc(movieId: number): Promise<string | null> {
  try {
    // API ENDPOINT
    const url = `${API_BASE_URL}/${API_BASE_URL_VERSION}/movie/${movieId}/images?language=en&api_key=${API_KEY}`;
    const res = await axios.get(url);

    if (res.status !== 200) {
      handleFetchApiError('fetch movie banner image', res.statusText);
    }

    const backdropList = res.data.backdrops;
    const backdropSrc = getOptimizedBannerImage(backdropList);
    return backdropSrc;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return null;
    }

    return null;
  }
}
