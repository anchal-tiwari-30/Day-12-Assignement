import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ImageCard = ({ image, addToFavorites, removeFromFavorites }) => {
  const { id, urls, alt_description, liked_by_user } = image;

  const handleAddToFavorites = () => {
    addToFavorites(image);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
  };

  return (
    <div className="image-card">
      <img src={urls.thumb} alt={alt_description} className="image" />
      <div className="overlay">
        <div className="image-title">{alt_description}</div>
        {liked_by_user ? (
          <button className="remove-button" onClick={handleRemoveFromFavorites}>
            Remove
          </button>
        ) : (
          <button className="add-button" onClick={handleAddToFavorites}>
            <AiOutlineHeart className="heart-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
