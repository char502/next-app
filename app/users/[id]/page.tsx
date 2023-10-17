import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: number };
}

// this approach (accessing route parameters) only works in page.tsx pages
// so can't add these props to a component that is used oon this page

// If have a component on this page that needs to know the user id
// have to grab the user id at the page level
//then pass it as a prop to the component
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
