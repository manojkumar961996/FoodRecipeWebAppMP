// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import RecipeDetail from './RecipeDetail';
// import { FavoritesProvider } from './FavoritesContext';

// // Mock useLocation and useNavigate hooks
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useLocation: jest.fn(),
//     useNavigate: jest.fn(),
// }));

// // Mock useFavorites hook
// jest.mock('./FavoritesContext', () => ({
//     useFavorites: jest.fn(),
// }));

// describe('RecipeDetail', () => {
//     const mockState = {
//         label: 'Test Recipe',
//         image: 'test-image.jpg',
//         ingredientLines: ['Ingredient 1', 'Ingredient 2'],
//         dietLabels: ['Diet Label 1', 'Diet Label 2'],
//         calories: 500,
//         totalWeight: 200,
//         totalTime: 30,
//         cuisineType: ['Cuisine 1', 'Cuisine 2'],
//         mealType: ['Meal 1', 'Meal 2'],
//         dishType: ['Dish 1', 'Dish 2'],
//     };

//     beforeEach(() => {
//         jest.clearAllMocks();
//         jest.resetAllMocks();
//     });

//     test('renders recipe details correctly', () => {
//         useLocation.mockReturnValue({ state: mockState });
//         useFavorites.mockReturnValue({ addToFavorites: jest.fn() });
//         const { getByText, getByAltText } = render(
//             <BrowserRouter>
//                 <FavoritesProvider>
//                     <RecipeDetail />
//                 </FavoritesProvider>
//             </BrowserRouter>
//         );

//         expect(getByText('Test Recipe')).toBeInTheDocument();
//         expect(getByAltText('Test Recipe')).toBeInTheDocument();
//         expect(getByText('Ingredient 1, Ingredient 2')).toBeInTheDocument();
//         expect(getByText('Diet Labels:')).toBeInTheDocument();
//         expect(getByText('Diet Label 1')).toBeInTheDocument();
//         expect(getByText('Diet Label 2')).toBeInTheDocument();
//         expect(getByText('Calories: 500')).toBeInTheDocument();
//         expect(getByText('Total Weight: 200')).toBeInTheDocument();
//         expect(getByText('Total Time: 30 minutes')).toBeInTheDocument();
//         expect(getByText('Cuisine Type: Cuisine 1, Cuisine 2')).toBeInTheDocument();
//         expect(getByText('Meal Type: Meal 1, Meal 2')).toBeInTheDocument();
//         expect(getByText('Dish Type: Dish 1, Dish 2')).toBeInTheDocument();
//     });

//     test('handles click on Add to Favorites button', () => {
//         useLocation.mockReturnValue({ state: mockState });
//         const addToFavoritesMock = jest.fn();
//         useFavorites.mockReturnValue({ addToFavorites: addToFavoritesMock });
//         const { getByText } = render(
//             <BrowserRouter>
//                 <FavoritesProvider>
//                     <RecipeDetail />
//                 </FavoritesProvider>
//             </BrowserRouter>
//         );

//         fireEvent.click(getByText('Add to Favorites'));
//         expect(addToFavoritesMock).toHaveBeenCalledWith(mockState);
//     });

//     test('handles click on Favorites Recipes button', () => {
//         const navigateMock = jest.fn();
//         useLocation.mockReturnValue({ state: mockState });
//         useNavigate.mockReturnValue(navigateMock);
//         const { getByText } = render(
//             <BrowserRouter>
//                 <FavoritesProvider>
//                     <RecipeDetail />
//                 </FavoritesProvider>
//             </BrowserRouter>
//         );

//         fireEvent.click(getByText('Favorites Recipes'));
//         expect(navigateMock).toHaveBeenCalledWith('/favorites');
//     });
// });
