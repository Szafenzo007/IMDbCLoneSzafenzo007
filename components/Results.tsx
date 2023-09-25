import React from 'react';
import { Result } from '@/types';
import MovieCard from './MovieCard';
export const dynamic = "force-dynamic";

interface ResultsProps {
  results: Result[]; // Assuming Result is the correct type for your data
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;