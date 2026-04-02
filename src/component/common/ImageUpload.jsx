'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

export default function ImageUpload() {
  const [publicId, setPublicId] = useState('');

  return (
    <div>
      <CldUploadWidget
        uploadPreset="uomo_preset"
        onSuccess={(result) => {
          setPublicId(result.info.public_id);
          console.log('✅ URL:', result.info.secure_url);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()}>
            Upload Image
          </button>
        )}
      </CldUploadWidget>

      {publicId && (
        <CldImage
          src={publicId}
          width={400}
          height={300}
          alt="uploaded"
        />
      )}
    </div>
  );
}