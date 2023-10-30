export { default } from 'next-auth/middleware';

// import { NextRequest, NextResponse } from 'next/server';

// Using new-page as a demo, don't have this file
// As second argument, pass the base url of our website
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ['/users/resetPassword/:path*'],
};
