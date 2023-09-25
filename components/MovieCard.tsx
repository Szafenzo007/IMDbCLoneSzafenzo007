// import Image from "next/image";
// import Link from "next/link";
 import { FiThumbsUp } from "react-icons/fi";

// export default function MovieCard({ result }) {
//     return (
//     <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
//       <Link href={`/movie/${result.id}`}>
//         <Image
//           src={`https://image.tmdb.org/t/p/original/${
//             result.backdrop_path || result.poster_path
//           }`}
//           width={500}
//           height={300}
//           className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
//           style={{
//             maxWidth: "100%",
//             height: "auto",
//           }}
//           placeholder="blur"
//           blurDataURL="/spinner.svg"
//           alt="image is not available"
//         ></Image>
//         <div className="p-2">
//           <p className="line-clamp-2 text-md">{result.overview}</p>
//           <h2 className="truncate text-lg font-bold">
//             {result.title || result.name}
//           </h2>
//           <p className="flex items-center">
//             {result.release_date || result.first_air_date}
//             <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }



import Image from 'next/image'
import Link from "next/link";

import { Card,CardContent,CardFooter } from './ui/card';

import { Result } from "@/types";

 interface MovieCard {
    result: Result;
 }




const MovieCard: React.FC<MovieCard> = ({ result }) => {
        return (
         
            <Link href={`/movie/${result.id}`} 
                 className='cursor-pointer sm:p-3 sm:hover:shadow-red-400 
                 sm:shadow-md rounded-lg sm:border sm:border-yellow-400 sm:m-2
                  transition-shadow duration-200 group '>
                <Card className="rounded-lg border-2">
                    <CardContent className="pt-4">
                        <div className='cursor-pointer sm:p-3 sm:hover:shadow-red-400 
    sm:shadow-md rounded-lg sm:border sm:border-yellow-400 sm:m-2
     transition-shadow duration-200 group'>
                            <Image
                            
                                      
                            src={`https://image.tmdb.org/t/p/original/${
                                result.backdrop_path || result.poster_path
                              }`}
                                      width={500}
                                      height={300}
                                      //className="aspect-square object-cover rounded-lg transition-all
                                    //  duration-300 hover:scale-110"
                                      className="aspect-square object-cover rounded-lg 
                                       duration-300 hover:scale-110sm:rounded-t-lg group-hover:opacity-80 
                                      transition-opacity 
                                        "
                                      style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                      }}
                                      placeholder="blur"
                                      blurDataURL="/spinner.svg"
                                      alt="image is not available"
                                    />
                                 
                               

                                </div>
                    </CardContent>
                    <CardFooter className='flex-col items-start'>
                        
                                <p className="line-clamp-2 text-md">{result.overview}</p>
                            <p className='font-semibold text-lg'>
                            {result.title || result.name}</p>
                            {/* <p className='text-sm text-primary/80'>  */}
                            {/* </p> */}
                            <p className="flex items-center text-sm text-primary/80">
                                        {result.release_date || result.first_air_date}
                                        <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
                                      </p>
                      
                           
                    </CardFooter>
                </Card>
                     </Link>      
        )
    }

    export default MovieCard