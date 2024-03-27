import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
// import Blog from "./components/Blog";
import RecipeDetail from "./components/RecipeDetail";
import LoginComponent from "./components/LoginComponent";
import PrivateRoute from "./components/PrivateRoute";
import About from "./components/About";
import ContactUs from "./components/Contact";
import RecipeList from "./components/RecipeList";
import { FavoritesProvider } from './components/FavoritesContext';
import FavoriteRecipesList from "./FavoriteRecipiesList";

function App() {

  return (
    <div className="background">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <FavoritesProvider> {/* Move FavoritesProvider here */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/RecipeList" element={<PrivateRoute>
                <RecipeList />
              </PrivateRoute>} />
              <Route path="/favorites" element={<FavoriteRecipesList />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<ContactUs />} />
            </Routes>
          </FavoritesProvider>
          {/* <Footer /> */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
