# Title of project: Food Recipe Web App (Mini project)

## Description of features :

- ## User Authentication
  Dashboard screen : User can sign-up /login using email and password.
- ## Recipe search functionality
  RecipeListScreen: User will be navigated to RecipeListScreen where API call will happen asynchronosly and recipe data will be rendered inside a div, User can also search for recipe in the same screen, User can also see his/her favorite recipies by clicking on Favorite Recipe button
- ## Recipe Details functionality
  RecipeDetailsScreen: User taps on any recipe to see more details about the selected recipe, including ingredients, instructions, etc. he/she will be navigated to this screen when user can see entire details of recipe and user can also add the recipe into favorites.
- FavoriteRecipeListScreen: When user taps on Favorite recipe button he/she will be redirected to this page where they can see the list of their favorite recipies
- ## Responsiveness
  Ensured the app is functional in both mobile and web platforms
- ## UserDashboard
  After loggin in, user can see his favorite recipies and search functionality is implemented.
- ## Implemented data refresh whenever user navigated to dashboard
- ## Tried to enhance user experience
- ## implemented unit testing by writing unit test cases using jest and RTL

### FavoritesContext.js

- In this project, I used createContext hook of react to store the favorite recipies of user so that I can access them whereever I want across the project.

#### Project setup

- Initializing new expo app --> npx create-react-app my-app
- Navigate to project directory --> cd my-app
- To run the project on the web --> npx expo install react-dom react-native-web @expo/metro-runtime
- Run the app on mobile or web --> npm start
- Also tested functionalities and responsiveness in different web platforms

#### GIT link: https://github.com/manojkumar961996/FoodRecipeFinderMobileApp
