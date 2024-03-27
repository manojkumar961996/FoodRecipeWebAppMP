import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (recipe) => {
        setFavorites([...favorites, recipe]);
        alert('Recipe added to favorites!');
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext };
