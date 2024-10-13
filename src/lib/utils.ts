import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { API_BASE_IMG_URL } from './api';
import { Movie, MovieDetails, TVSeries, TVSeriesDetails } from './type';
import { fetchMovieDetailsById } from '@/services/movie';
import { fetchTVSeriesDetailsById } from '@/services/tv';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiImage(imageSrc: string) {
  return `${API_BASE_IMG_URL}/${imageSrc}`;
}

type GetLatestItemDetailsProps = {
  itemType: 'movie' | 'tv-series';
  items: Movie[] | TVSeries[];
};

export async function getLatestItemDetails({
  itemType,
  items,
}: GetLatestItemDetailsProps): Promise<MovieDetails | TVSeriesDetails | null> {
  const isMovie = itemType === 'movie';
  const latestItem = items[items.length - 1];

  const latestItemDetails = isMovie
    ? await fetchMovieDetailsById((latestItem as Movie).id)
    : await fetchTVSeriesDetailsById((latestItem as TVSeries).id);

  return latestItemDetails;
}
