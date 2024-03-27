import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './recipedetail.css'; // Import CSS file
import { useFavorites } from './FavoritesContext';

function RecipeDetail() {
    const location = useLocation();
    const recipe = location.state; // Access the recipe object from props
    const { addToFavorites } = useFavorites();
    const navigate = useNavigate();

    // Check if recipe exists
    if (!recipe) {
        return <div>No recipe found!</div>;
    }

    const handleFavoritesClick = () => {
        navigate('/favorites'); // Navigate to favorites list page
    };

    const { label, image, ingredientLines, dietLabels, calories, totalWeight, totalTime, cuisineType, mealType, dishType } = recipe;

    return (
        <div className="recipe-detail">
            {/* Add to favorites button */}
            <div className="button-container">
                <button className="favorite-button" onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
                {/* Favorites Recipes button */}
                <button className="favorites-recipes-button" onClick={handleFavoritesClick}>Favorites Recipes</button>
            </div>

            <h2>{label}</h2>
            <img src={image} alt={label} style={{ maxWidth: '100%' }} />
            <h3>Ingredients:</h3>
            {/* Join ingredientLines array into a single string */}
            <p>{ingredientLines.join(', ')}</p>
            <h3>Diet Labels:</h3>
            <ul>
                {dietLabels.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <p>Total Weight: {totalWeight}</p>
            <p>Total Time: {totalTime} minutes</p>
            {/* Add checks for undefined properties */}
            <p>Cuisine Type: {cuisineType?.join(', ')}</p>
            <p>Meal Type: {mealType?.join(', ')}</p>
            <p>Dish Type: {dishType?.join(', ')}</p>
        </div >
    );

}

export default RecipeDetail;
