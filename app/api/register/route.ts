import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';

// could add more rules like:
// at least one uppercase character
// at least 1 x number
// a special character etc
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if request is valid
  // have to make sure we don't have a user with this email in our db
  // have to use Prisma client for this

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  // if user exists
  // return a next response

  if (user)
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  // Otherwise create the user
  // firstly have to hash their password
  // first arg is the password to hash
  // the second is add pass a salt or number of rounds (here is 10)
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword,
    },
  });

  // finally, return the response to the client

  return NextResponse.json({ email: newUser.email });
}
