import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

// have to passs URL or Query String Parameters from the page file down to
// the component
interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      {/* fallback - what you want the component to display
        while waiting for the <UserTable />
        component to render */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
