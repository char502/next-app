'use client';
// import prisma from '@/prisma/client';
import React, { FormEvent, Suspense, useRef, useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
});

// z.infer returns a TypeScript type
type newUserData = z.infer<typeof schema>;

// interface PwdResetData {
//   oldPassword: string;
//   newPassword: string;
// }

const RegisterNewUser = () => {
  // console.log('Resetting password for ' + email);

  const [newUser, setNewUser] = useState<newUserData>({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsLoading(true);

    if (newUser.name)
      // console.log('old password', oldPassword.current.value);
      console.log('old password', newUser.name);

    if (newUser.email)
      // console.log('new password', newPassword.current.value);
      console.log('new password', newUser.email);

    if (newUser.password)
      // console.log('new password', newPassword.current.value);
      console.log('new password', newUser.password);

    console.log(newUser);

    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201)
      setNewUser({
        name: 'null',
        email: '',
        password: '',
      });
    alert('user successfully added');
    setIsLoading(false);
  };
  return (
    <div>
      <h3 className="mb-6">Register New User</h3>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="name">Name</label>
          </div>
          <div className="md:w-2/3">
            <input
              // ref={oldPasswordRef}
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  name: event.currentTarget.value,
                })
              }
              value={newUser.name}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="email">Email</label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  email: event.currentTarget.value,
                })
              }
              value={newUser.email}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label htmlFor="password">Password</label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  password: event.currentTarget.value,
                })
              }
              value={newUser.password}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              type="password"
              //   placeholder=""
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
              {isLoading && <span>Registering User....</span>}
              {!isLoading && <span>Register User</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterNewUser;
