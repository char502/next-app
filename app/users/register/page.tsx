import React from 'react';
import { z } from 'zod';
import RegisterNewUser from './RegisterNewUser';

const RegisterNewUserPage = () => {
  return (
    <>
      <RegisterNewUser />
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

export default RegisterNewUser;
