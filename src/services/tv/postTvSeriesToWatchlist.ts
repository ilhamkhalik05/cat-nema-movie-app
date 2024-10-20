import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import axios from 'axios';

type PostToWatchlistResponse = {
  status: 'SUCCESS' | 'FAILED';
  message: string;
};

export async function postTVSeriesToWatchlist(
  itemId: number,
  sessionId: string,
  accountId?: number,
): Promise<PostToWatchlistResponse> {
  try {
    /* API ENDPOINT POST MOVIE TO WATCHLIST
    /- accountId will be assign to 'null' if its not given
    /- sessionId is required
    */
    const url = `${API_BASE_URL}/${API_BASE_URL_VERSION}/account/${
      accountId ? accountId : null
    }/watchlist?session_id=${sessionId}&api_key=${API_KEY}`;

    // JSON BODY
    const body = { media_type: 'tv', media_id: itemId, watchlist: true };

    const res = await axios.post(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Handle error when the status is not 201 or CREATED
    if (res.status !== 201) {
      handleFetchApiError('add tv series to watchlist', res.statusText);
    }

    return { status: 'SUCCESS', message: 'Success add item to your watchlist' };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return { message: error.message, status: 'FAILED' };
    }

    return { message: 'Failed to add item to watchlist', status: 'FAILED' };
  }
}
