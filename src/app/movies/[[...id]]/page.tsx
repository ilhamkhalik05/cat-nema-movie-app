import {
  fetchMovieDetailsById,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '@/services/movie';

import Banner from '@/components/banner';
import Footer from '@/components/footer';
import MovieCardList from '@/components/movie-card-list';

export default async function MoviesPage({ params }: { params: { id: string } }) {
  const movieId = params.id && parseInt(params.id[0]);

  const [nowPlayingMovies, popularMovies, topRatedMovies] = await Promise.all([
    fetchNowPlayingMovies(),
    fetchPopularMovies(),
    fetchTopRatedMovies(),
  ]);

  const movieDetails = movieId ? await fetchMovieDetailsById(movieId) : null;
  const movieBanner = movieDetails || nowPlayingMovies[nowPlayingMovies.length - 1];

  return (
    <>
      <Banner bannerType="movie" item={movieBanner} />

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
