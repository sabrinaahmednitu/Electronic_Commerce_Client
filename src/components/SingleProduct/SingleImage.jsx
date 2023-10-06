import React from 'react';

const SingleImage = ({ imgs }) => {
    console.log(imgs);
    return (
      <div>
        <h1>images</h1>
        <div className="flex flex-col">
          {/* {imgs.map((img, index) => (
            <img key={index} src={img.url} alt={img.filename} />
          ))} */}
          {Array.isArray(imgs) && imgs.length > 0 ? (
            imgs.map((img, index) => (
              <img key={index} src={img.url} alt={img.filename} />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    );
};

export default SingleImage; 