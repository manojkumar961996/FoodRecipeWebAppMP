import React, { useState, useEffect } from 'react';
import './RecipeList.css';
import { Link, useNavigate } from 'react-router-dom';

function RecipeList() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useNavigate(); // Get the history object
  const navigate = useNavigate();
  const APP_ID = '7ecb8a6a';
  const API_KEY = '861a4e5a1a9b1aa2299d742856f25746';

  useEffect(() => {
    fetchRecipes(); // Fetch recipes when component mounts
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q="ab"&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setCards(data.hits); // Set the fetched recipes to the state
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle click event and navigate to RecipeDetail component
  const handleRecipeClick = (recipe) => {
    debugger
    console.log("clicked on recipe", recipe)
    // const navigate = useNavigate(); // Get the navigate function
    navigate(`/recipe/${recipe.label}`, { state: recipe }); // Navigate with props
  };

  // Function to filter recipes based on search term
  const filteredCards = cards.filter((card) => {
    return card.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <h3>Search here to explore more recipes</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Search button can be added here if needed */}
      </div>
      <div className="row">
        {filteredCards.map((card, index) => (
          <div key={index} className="card" onClick={() => handleRecipeClick(card.recipe)}>
            <Link to={`/recipe/${card.recipe.label}`}>
              <img src={card.recipe.image} alt={card.recipe.label} />
              <div className="card-content">
                <h5>{card.recipe.label}</h5>
                <p>Meal Type: {card.recipe.mealType}</p>
                <p>Cuisine Type: {card.recipe.cuisineType}</p>
                <p>Tap to view more details...</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
