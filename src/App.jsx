// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Navbar from "./components/Navbar";
import RecipeList from "./pages/RecipeList";
import RecipeForm from "./pages/RecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Hero from "./pages/Hero";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/recipes"
            element={          
                <RecipeList />        
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <RecipeDetails />
            }
          />

          <Route
            path="/add"
            element={
              <PrivateRoute>
                <RecipeForm />
              </PrivateRoute>
            }
          />

          <Route path="/about" element={<About />} />

          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <RecipeForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
