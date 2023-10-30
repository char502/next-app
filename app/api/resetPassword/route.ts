import { NextRequest, NextResponse } from 'next/server';
import schema from '../resetPassword/schema';
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';

// PUT for replacing an object
// PATCH for updating one or more properties
export async function PUT(
  request: NextRequest
  // { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    // where: { id: params.id },
    where: { email: body.email },
  });

  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const hashedPasswordFromDB = user.hashedPassword;

  const passwordCompare = bcrypt.compare(
    body.oldPassword,
    hashedPasswordFromDB!,
    async function (err, result) {
      if (err)
        return NextResponse.json({ error: err.message }, { status: 500 });
      if (result) {
        console.log('passwords match');

        const newPasswordProvidedAndHashed = await bcrypt.hash(
          body.newPassword,
          10
        );

        const updateUserPassword = await prisma.user.update({
          where: { id: user.id },
          data: {
            email: body.email,
            hashedPassword: newPasswordProvidedAndHashed,
          },
        });

        return NextResponse.json(updateUserPassword, { status: 200 });
      } else {
        console.log("passwords don't match");
        return NextResponse.json(
          { error: 'Passwords dont match' },
          { status: 404 }
        );
      }
    }
  );
}
