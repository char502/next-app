import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

// this approach (accessing route parameters) only works in page.tsx pages
// so can't add these props to a component that is used oon this page

// If have a component on this page that needs to know the user id
// have to grab the user id at the page level
//then pass it as a prop to the component
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
