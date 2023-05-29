import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ErrorMessage from './components/ErrorMessage';
import FavoriteImages from './components/FavoriteImages';

import './App.css';


const App = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const searchPhotos = (searchTerm) => {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchTerm,
          per_page: 20,
          client_id: 'gDLlLR-5ZLnWlq1AGVh4YXYJ9BSfk8qOXp4FQvCEyTQ',
        },
      })
      .then((response) => {
        setImages(response.data.results);
        setError('');
      })
      .catch((error) => {
        setError('Error occurred while fetching photos.');
      });
  };

  const addToFavorites = (image) => {
    const isDuplicate = favorites.some((favImage) => favImage.id === image.id);
    if (!isDuplicate) {
      setFavorites([...favorites, image]);
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((image) => image.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="app">
      <SearchBar searchPhotos={searchPhotos} />
      {error && <ErrorMessage message={error} />}
      <ImageGrid images={images} addToFavorites={addToFavorites} />
      <FavoriteImages
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    
    </div>
  );
};

export default App;
