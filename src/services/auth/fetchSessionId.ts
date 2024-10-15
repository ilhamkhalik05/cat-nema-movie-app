import { handleFetchApiError } from '@/lib/api';
import { API_BASE_URL, API_BASE_URL_VERSION, API_KEY } from '@/lib/env';
import axios from 'axios';

type FetchUserSessionProps = {
  username: string;
  password: string;
  requestToken: string;
};

export async function fetchSessionId({
  username,
  password,
  requestToken,
}: FetchUserSessionProps): Promise<string | null> {
  try {
    // Validate request token with credentials login
    const validateTokenUrl = `${API_BASE_URL}/${API_BASE_URL_VERSION}/authentication/token/validate_with_login?api_key=${API_KEY}`;
    const validateTokenBody = { username, password, request_token: requestToken };

    const validateRes = await axios.post(validateTokenUrl, validateTokenBody);

    if (validateRes.status !== 200) {
      handleFetchApiError('validate request token', validateRes.statusText);
    }

    // Create new session with validated request token
    const createSessionUrl = `${API_BASE_URL}/${API_BASE_URL_VERSION}/authentication/session/new?api_key=${API_KEY}`;
    const createSessionBody = { request_token: requestToken };

    const sessionRes = await axios.post(createSessionUrl, createSessionBody);

    if (sessionRes.status !== 200) {
      handleFetchApiError('create new session', sessionRes.statusText);
    }

    return sessionRes.data.session_id;
  } catch (error) {
    console.error(error);
    return null;
  }
}
