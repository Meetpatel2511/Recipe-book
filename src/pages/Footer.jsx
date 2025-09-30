import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

                {/* footer  */}

            <footer className="flz-footer" role="contentinfo">
      <div className="flz-grid">
        {/* Brand + tagline */}
        <div className="flz-brand">
          <div className="logo">
            <span className="logo-left">FLAVOUR</span>
            <span className="logo-accent">DIARY</span>
          </div>
          <p className="tagline">
            Join Flavoriz now and embark on a culinary journey to explore, create, and savor amazing recipes!
          </p>
          <p className="copy sm-only">Copyright © 2023 Flavoriz. All rights reserved.</p>
        </div>

        {/* Company */}
        <nav aria-label="Company" className="flz-col">
          <h4>Company</h4>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/recipes"><li>Recipes</li></Link>
            <Link to="/add"><li>Recipes Form</li></Link>
          </ul>
        </nav>

        {/* Recipes */}
        <nav aria-label="Recipes" className="flz-col">
          <h4>Recipes</h4>
          <ul>
            <li><a href="#">Appetizers</a></li>
            <li><a href="#">Main Courses</a></li>
            <li><a href="#">Deserts & Sweets</a></li>
            <li><a href="#">International Flavors</a></li>
          </ul>
        </nav>

        {/* Contact / Social */}
        <nav aria-label="Contact" className="flz-col">
          <h4>Contact</h4>
          <ul>
            <Link to="https://github.com/Meetpatel2511"><li>Github</li></Link>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <Link to="https://github.com/Meetpatel2511"><li>Linkedin</li></Link>
          </ul>
        </nav>

        {/* Newsletter row */}
        <form className="flz-newsletter" aria-label="Signup for newsletter">
          <label htmlFor="flz-email" className="sr-only">Enter your email</label>
          <input
            id="flz-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
          <button type="submit" className="pill">Signup</button>
          <div id="announce" aria-live="polite" className="sr-only" />
        </form>
      </div>

      {/* Desktop copyright */}
      <div className="copy lg-only">
        Copyright © 2025 Flavordiary. All rights reserved.
      </div>
    </footer>
    

    </>
  )
}

export default Footer