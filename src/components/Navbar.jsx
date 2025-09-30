import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // import your firebase auth instance
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Listen for Firebase auth changes (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // go to Hero page after logout
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="nav-left">
          <Link className="logo" to="/">FLAVOUR<span>DIARY</span></Link>
        </div>

        {/* Center: Links */}
        <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="nav-link" to="/recipes" onClick={() => setMenuOpen(false)}>Recipes</Link>
          <Link className="nav-link" to="/add" onClick={() => setMenuOpen(false)}>Add Recipe</Link>
          <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>

        </div>

        {/* Right: Login/Logout */}
        <div className="nav-right">
          {isLoggedIn ? (
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn-login" onClick={handleLogin}>Login</button>
          )}
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
