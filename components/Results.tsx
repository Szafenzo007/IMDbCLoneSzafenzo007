// import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <div key={result.id}> {result.original_title} </div>
      ))}
    </div>
  );
}
// import ProductCard from '@/components/ui/ProductCard';
// import { Result } from "@/types";


// interface ResultsListProps {
//     items : Result [];
// }

// const ProductList : React.FC<ResultsListProps> = ({
//     items }) => {
//         return (
//             <div className='space-y-4'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
//                 lg:grid-cols-4 gap-4 '>
//                     {items.map((item) => (
//                         <ProductCard key={item.id} data={item} />
//                     ))}
//                 </div>
//             </div>
//         )
//     };

// export default ProductList;