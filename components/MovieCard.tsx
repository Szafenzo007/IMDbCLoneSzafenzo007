import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ result }) {
    return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}



// import Image from 'next/image'
// import Link from "next/link";

// import { Card,CardContent,CardFooter } from './ui/card';

// import { Result } from "@/types";

// interface MovieCard {
//     result: Result;
// }



// const MovieCard: React.FC<MovieCard> = ({
//     result }) => {
//         return (
//             <Link href="/" 
//                  className='outline-0 
//                  focus:ring-2 hover:ring-2 
//                  ring-primary transition
//                 duration-300 rounded-lg '>
//                 <Card className="rounded-lg border-2">
//                     <CardContent className="pt-4">
//                         <div className='aspect-square relative bg-foreground/5 dark:bg-background rounded-lg'>
//                             <Image
                            
                                      
//                             src={`https://image.tmdb.org/t/p/original/${
//                                 result.backdrop_path || result.poster_path
//                               }`}
//                                       width={500}
//                                       height={300}
//                                       className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
//                                       style={{
//                                         maxWidth: "100%",
//                                         height: "auto",
//                                       }}
//                                       placeholder="blur"
//                                       blurDataURL="/spinner.svg"
//                                       alt="image is not available"
//                                     />
                                 
//                                 // alt=""
//                                 // fill
//                                 // className="aspect-square
//                                 // object-cover rounded-lg transition-all
//                                 // duration-300 hover:scale-110" 
//                         </div>

//                     </CardContent>
//                     <CardFooter className='flex-col items-start'>
//                         <div>
//                             <p className='font-semibold text-lg'>
//                                 {result.name}</p>
//                             <p className='text-sm text-primary/80
//                             '>{result.title_original}</p>
//                         </div>
//                             <div className='flex items-center justify-between'
//                             >{data?.price}</div>
//                     </CardFooter>
//                 </Card>
//                      </Link>      
//         )
//     }

//     export default MovieCard