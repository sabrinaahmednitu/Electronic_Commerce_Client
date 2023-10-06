import React, { useState } from 'react';

const SingleImage = ({ imgs=[{url:" "}] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
    return (
      <div className="flex gap-5 items-center justify-center">
        <div className="flex flex-col gap-5">
          {imgs?.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.filename}
              className="w-[110px]"
              onClick={()=>setMainImage(img)}
            />
          ))}
        </div>
        <div>
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    );
};

export default SingleImage; 