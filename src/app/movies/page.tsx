import Banner from '@/components/banner';
import Footer from '@/components/footer';
import MovieCardList from '@/components/movie-card-list';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies } from '@/services/movie';

export default async function MoviesPage() {
  const [nowPlayingMovies, popularMovies, topRatedMovies] = await Promise.all([
    fetchNowPlayingMovies(),
    fetchPopularMovies(),
    fetchTopRatedMovies(),
  ]);

  const latestMovie = nowPlayingMovies[nowPlayingMovies.length - 1];

  return (
    <>
      <Banner bannerType="movie" item={latestMovie} />

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
