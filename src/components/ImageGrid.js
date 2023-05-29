import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ images, addToFavorites }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
