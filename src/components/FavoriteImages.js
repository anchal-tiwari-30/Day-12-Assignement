import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const FavoriteImages = ({ favorites, removeFromFavorites }) => {
  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
  };

  return (
    <div className="favorite-images">
      <h2 >Your Favorite Images</h2>
      {favorites.length === 0 ? (
        <p>No favorite images yet.</p>
      ) : (
        <div className="image-grid">
          {favorites.map((image) => (
            <div className="image-card" key={image.id}>
              <img src={image.urls.thumb} alt={image.alt_description} />
              <div className="overlay">
                <div className="image-title">{image.alt_description}</div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromFavorites(image.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteImages;
