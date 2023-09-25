import Results from "@/components/Results";
export const dynamic='force-dynamic';

type SearchPageProps = {
  params: {
    searchTerms: string;
    // Add other properties as needed
  };
};

export default async function SearchPage({ params }: SearchPageProps) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.searchTerms}&api_key=${process.env.API_KEY}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
