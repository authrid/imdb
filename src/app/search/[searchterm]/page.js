import Results from '../../components/results'
const API_KEY = process.env.API_KEY
export default async function SearchPage({params}) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchterm}&language=en-US&include_adult=false`);
  if(!res.ok){
    throw new Error("Error Fetching Data!");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found!</h1>
      )}
      {results && <Results results={results}></Results>}
    </div>
  )
}
