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
import { PageSectionTitle } from '@/components/utils/page-section-title';

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
          <PageSectionTitle>Now Playing in Cinema</PageSectionTitle>
          <MovieCardList movies={nowPlayingMovies} />
        </section>

        <section>
          <PageSectionTitle>Popular Movies</PageSectionTitle>
          <MovieCardList movies={popularMovies} />
        </section>

        <section>
          <PageSectionTitle>All Time Best</PageSectionTitle>
          <MovieCardList movies={topRatedMovies} />
        </section>
      </main>

      <Footer />
    </>
  );
}
