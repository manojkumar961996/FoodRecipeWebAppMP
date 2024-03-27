import React, { useContext } from 'react';
import { FavoritesContext } from './components/FavoritesContext'; // Import the context
import './FavoriteRecipiesList.css'; // Import CSS file

function FavoriteRecipesList() {
    const { favorites } = useContext(FavoritesContext); // Get favorites from context

    // Check if there are any favorites
    if (!favorites.length) {
        return <div className="no-favorites">No favorite recipes yet!</div>;
    }

    return (
        <div className="favorite-recipes-list">
            <h2>Your Favorite Recipes</h2>
            <div className="recipe-container">
                {favorites.map((recipe) => (
                    <div className="recipe-card" key={recipe.label}>
                        {/* Display recipe details like name, image, and "Tap here to view details" text */}
                        <img src={recipe.image} alt={recipe.label} className="recipe-image" />
                        <h4 className="recipe-label">{recipe.label}</h4>
                        <p className="tap-text">Tap here to view details</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteRecipesList;
