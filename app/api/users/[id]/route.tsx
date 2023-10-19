import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

// Getting a user
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  // for example, if user is greater than 10, show a 404 error
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Mosh' });
}

// PUT for replacing an object
// PATCH for updating one or more properties
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Read the request body and validate it
  const body = await request.json();
  // Also have the parse method, this throws an exception if there is a validation error
  // safeParse doesn't yell at us, it just returns an object that contains the result of the validation
  const validation = schema.safeParse(body);
  if (!validation.success)
    // If invalid, return 400 (bad request)
    // Will get this error if pass an empty string
    return NextResponse.json(validation.error.errors, { status: 400 });

  // If user doesn't exist, return 404 (not found)
  // Will get this error if have valid name but invalid user
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // Otherwise, update the user in db
  // and return the updated user
  // (A user object is included in the body of the request in ppostman)
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from db
  // If not found, return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  // Otherwise, delete the user from db
  // Return 200 response
  return NextResponse.json({});
}
