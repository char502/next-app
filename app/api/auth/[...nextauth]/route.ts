import NextAuth from 'next-auth';
import { authOptions } from '../authOptions';

// with process.env, can read our environment variables
// In env variables below have used a TS non null assertion (!)
// as we know that we have set up the environment variables properly
// and we know that they will never be null
const handler = NextAuth(authOptions);

// Exporting this function with two different names GET and POST
// So any get or post request sent to this endpoint will be handled
// inside this handler function
// ================================================================
// Essentially, we're letting next auth expose a bunch of endpoints
// that start with /auth
export { handler as GET, handler as POST };
