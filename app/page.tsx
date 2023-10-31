// This is the home page

'use client';
import Link from 'next/link';
import Image from 'next/image';
// import type { Metadata } from 'next';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';
import { useState } from 'react';
// =============================================================================
// importing this only if needed (lazy loading)
// import dynamic from 'next/dynamic';
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   loading: () => <p>Loading...</p>,
// });
// =============================================================================
// import _ from 'lodash';

// export default async function Home() {
export default function Home() {
  // const session = await getServerSession(authOptions);

  // ========================
  // For Lazy loading example
  // const [isVisible, setVisible] = useState<boolean>(false);
  // ========================

  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <Link href="/users">Users</Link>
      <Image src={coffee} alt="cup of coffee" />
      <Image
        src="https://bit.ly/react-cover"
        alt="cup of coffee"
        width={275}
        height={170}
        // If want responsive, use fill
        // fill
        // style={{ objectFit: 'cover' }}
        // or use Tailwind
        // className="object-cover"
      />
      <ProductCard />
      {/* ============================================================================= */}
      {/* For Lazy loading example */}
      {/* ============================================================================= */}
      {/* <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} */}

      <button
        onClick={async () => {
          // this exports the default object from the lodash module
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// With this metadata object in our root layout
// every page will have these metatags
// can then got to individual pages and overwrite these values
// an example of overwriting the values as per Layout.tsx
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
//   // used when share pages on social media platforms
//   openGraph: {
//     title: 'Something differernt from Layout.tsx',
//     description: 'Something differernt from Layout.tsx',
//     images: 'Something differernt from Layout.tsx',
//     authors: 'Something differernt from Layout.tsx',
//   },
// };
