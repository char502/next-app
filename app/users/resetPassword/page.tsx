import prisma from '@/prisma/client';
import React, { FormEvent, Suspense, useRef, useState } from 'react';
import { z } from 'zod';
import ResetPassword from './ResetPassword';

const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
  // const user = prisma.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });

  // if (!user) {
  //   throw new Error('User not found');
  // }

  // const ResetPasswordToken = ;
};

export default ResetPasswordPage;
