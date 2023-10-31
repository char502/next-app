import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

// Getting a user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  // for example, if user is greater than 10, show a 404 error
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}

// PUT for replacing an object
// PATCH for updating one or more properties
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
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

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // Otherwise, update the user in db
  // and return the updated user
  // (A user object is included in the body of the request in ppostman)

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  // Fetch user from db
  // If not found, return 404 error
  if (!user)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  // Otherwise, delete the user from db
  await prisma.user.delete({
    where: { id: user.id },
  });
  // Return 200 response
  return NextResponse.json({});
}
