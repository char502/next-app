'use client';
import prisma from '@/prisma/client';
import schema from '../../api/resetPassword/schema';
import React, { FormEvent, Suspense, useRef, useState } from 'react';
import { z } from 'zod';
// import UserTable from './UserTable';
// import Link from 'next/link';

// // have to passs URL or Query String Parameters from the page file down to
// // the component
// interface Props {
//   searchParams: { sortOrder: string };
// }
// const schema = z.object({
//   oldPassword: z.string().min(5),
//   newPassword: z.string().min(5),
// });

// z.infer returns a TypeScript type
type PwdResetData = z.infer<typeof schema>;

// interface PwdResetData {
//   oldPassword: string;
//   newPassword: string;
// }

const ResetPassword = () => {
  // console.log('Resetting password for ' + email);

  const [passwordResetObj, setPasswordResetObj] = useState<PwdResetData>({
    email: '',
    oldPassword: '',
    newPassword: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ===============================================
  // Using the ref hook prevents continual rerenders every time the user types a letter
  // As per the onChange attribute with useState (rerenders every time update the state on key press)
  // Usually only need refs with complex forms when start to observe performance issues
  // Premature optimisation is the root of all evil
  // ===============================================
  // const oldPasswordRef = useRef<HTMLInputElement>(null);
  // const newPasswordRef = useRef<HTMLInputElement>(null);

  // const passwordResetObj = {
  //   oldPassword: '',
  //   newPassword: '',
  // };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (oldPasswordRef.current !== null)
  //     // console.log('old password', oldPassword.current.value);
  //     passwordResetObj.oldPassword = oldPasswordRef.current.value;

  //   if (newPasswordRef.current !== null)
  //     // console.log('new password', newPassword.current.value);
  //     passwordResetObj.newPassword = newPasswordRef.current.value;

  //   console.log(passwordResetObj);
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (passwordResetObj.oldPassword)
      // console.log('old password', oldPassword.current.value);
      console.log('old password', passwordResetObj.oldPassword);

    if (passwordResetObj.newPassword)
      // console.log('new password', newPassword.current.value);
      console.log('new password', passwordResetObj.newPassword);

    console.log(passwordResetObj);

    const res = await fetch('http://localhost:3000/api/resetPassword', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(passwordResetObj),
    });

    if (res.status === 200) alert('password successfully changed');
    setIsLoading(false);
  };
  return (
    <div>
      <h3 className="mb-6">Change Password Page</h3>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="email">Email</label>
          </div>
          <div className="md:w-2/3">
            <input
              // ref={oldPasswordRef}
              onChange={(e) =>
                setPasswordResetObj({
                  ...passwordResetObj,
                  email: e.target.value,
                })
              }
              value={passwordResetObj.email}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="old-password"
              type="email"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="old-password">Old Password</label>
          </div>
          <div className="md:w-2/3">
            <input
              // ref={oldPasswordRef}
              onChange={(e) =>
                setPasswordResetObj({
                  ...passwordResetObj,
                  oldPassword: e.target.value,
                })
              }
              value={passwordResetObj.oldPassword}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="old-password"
              type="password"
              // placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="new-password">New Password</label>
          </div>
          <div className="md:w-2/3">
            <input
              // ref={newPasswordRef}
              onChange={(e) =>
                setPasswordResetObj({
                  ...passwordResetObj,
                  newPassword: e.target.value,
                })
              }
              value={passwordResetObj.newPassword}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="new-password"
              type="password"
              // placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-2/4"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              // type="button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <span>Changing Password....</span>}
              {!isLoading && <span>Change Password</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
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

export default ResetPassword;
