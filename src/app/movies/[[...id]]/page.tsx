import type { MovieDetails } from '@/lib/type';
import {
  fetchMovieDetailsById,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '@/services/movie';
import { getLatestItemDetails } from '@/lib/utils';

import Banner from '@/components/banner';
import Footer from '@/components/footer';
import MovieCardList from '@/components/movie-card-list';

export default async function MoviesPage({ params }: { params: { id: string } }) {
  const movieId = params.id && Number(params.id[0]);

  const [nowPlayingMovies, popularMovies, topRatedMovies] = await Promise.all([
    fetchNowPlayingMovies(),
    fetchPopularMovies(),
    fetchTopRatedMovies(),
  ]);

  // Movie banner will be the details of the latest movie if movieId is not given in params
  const movieDetails = movieId && (await fetchMovieDetailsById(movieId));
  const movieBanner = movieDetails || (await getLatestItemDetails({ itemType: 'movie', items: nowPlayingMovies }));

  return (
    <>
      <Banner bannerType="movie" item={movieBanner as MovieDetails} />

      <main className="px-8 py-12 flex flex-col gap-20">
        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Now Playing</h1>
          <MovieCardList movies={nowPlayingMovies} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">Popular</h1>
          <MovieCardList movies={popularMovies} />
        </section>

        <section>
          <h1 className="text-2xl font-[600] tracking-wider mb-7">All Time Best</h1>
          <MovieCardList movies={topRatedMovies} />
        </section>
      </main>

      <Footer />
    </>
  );
}
