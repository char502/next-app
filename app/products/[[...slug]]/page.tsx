// import { Metadata } from 'next';
import React from 'react';
import { FileWatcherEventKind } from 'typescript';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;

// Example of dynamically generated Metadata
// export async function generateMetadata(): Promise<Metadata> {
//   const product = fetch('');

//   return {
//     title: 'product.title',
//     description: '.....',
//   };
// }
