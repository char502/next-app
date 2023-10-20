import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

// to prevent caching have to add this request object
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  // In this function, receive a request and return a response
  // fetch users from a database

  return NextResponse.json(users);
}

// POST requests, used for creating objects
export async function POST(request: NextRequest) {
  // first, read the body of the request
  // this returns a promise so need to make the promise async and await the request
  const body = await request.json();
  // Once read the body of the request need to Validate it
  // Validate
  // if invalid, return 400
  // Else, return data that was created
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  // status 200 means OK, status 201 means Object was created
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      // the other properties are not required because we gave them default values
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
