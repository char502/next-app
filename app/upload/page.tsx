'use client';
import React, { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      {publicId && (
        <CldImage alt={'cloud image'} src={publicId} width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset="m1jr4wnv"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: '#F5F5F5',
              sourceBg: '#FFFFFF',
              windowBorder: '#90a0b3',
              tabIcon: '#0094c7',
              inactiveTabIcon: '#69778A',
              menuIcons: '#0094C7',
              link: '#53ad9d',
              action: '#8F5DA5',
              inProgress: '#0194c7',
              complete: '#53ad9d',
              error: '#c43737',
              textDark: '#000000',
              textLight: '#FFFFFF',
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: 'https://fonts.googleapis.com/css?family=Poppins',
                active: true,
              },
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          console.log(result);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
