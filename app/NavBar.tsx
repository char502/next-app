'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  // because using this hook, have to make this component a client
  // component because with this hook we access the context object that
  // is passed using the session provider
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      <Link href="/users/register">Register New User</Link>
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {status === 'authenticated' && (
        <Link href="/users/resetPassword">Change Password</Link>
      )}
    </div>
  );
};

export default NavBar;
