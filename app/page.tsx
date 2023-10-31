// This is the home page
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
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
    </main>
  );
}
