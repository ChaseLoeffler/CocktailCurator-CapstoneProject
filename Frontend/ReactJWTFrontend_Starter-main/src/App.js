// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage/CocktailDetailsPage";
import SearchByCocktailPage from "./pages/SearchByCocktailPage/SearchByCocktailPage";
import SearchByIngredientsPage from "./pages/SearchByIngredientPage/SearchByIngredientPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="background-color">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/CocktailDetails/:cocktailId/"
          element={
            <PrivateRoute>
              <CocktailDetailsPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="/Search"
          element={
            <PrivateRoute>
              <SearchByCocktailPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="/ByIngredient"
          element={
            <PrivateRoute>
              <SearchByIngredientsPage/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
