import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// to prevent caching have to add this request object
export function GET(request: NextRequest) {
  // In this function, receive a request and return a response
  // fetch users from a database

  return NextResponse.json([
    {
      id: 1,
      name: 'Kyle',
    },
    {
      id: 2,
      name: 'Bobby',
    },
    {
      id: 3,
      name: 'Ryan',
    },
  ]);
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
  // status 200 means OK, status 201 means Object was created
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
