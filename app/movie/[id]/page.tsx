import Image from "next/image";

type MoviePageProps = {
  params: {
    id: string;
  };
};

async function getMovie(movieId: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }: MoviePageProps) {

    const movieId = params.id;
    const movie = await getMovie(movieId);
    return (
    <div className="w-full sm:p-3 sm:hover:shadow-red-400 
    sm:shadow-md rounded-lg sm:border sm:border-yellow-400 sm:m-2
     transition-shadow duration-200 group">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            

        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={600}
          height={400}
          className="rounded-lg sm:p-2 sm:hover:shadow-red-400 
          sm:shadow-md sm:border sm:border-yellow-400 sm:m-2
           transition-shadow duration-200"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
           
        
        
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
        </div>

    </div>
  )
}
