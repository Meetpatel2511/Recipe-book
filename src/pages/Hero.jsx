import React from "react";
import "./Hero.css";
import Mexican from '../assets/mexican.avif'
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Hero() {

    const data = [
        {
            title: "Spicy Mexican Tacos",
            img: Mexican
        },
        {
            title: "Caprese Salad Skewers",
            img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "Quinoa & Chickpea",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
        }
    ];
    return (
        <>
             <section className="hero">
      <div className="hero-content">
        <h1>
          Adventure <span>of Delicacies</span>
        </h1>
        <p>
          Unlock a world of culinary variety and unleash your inner chef the easy way with <strong>Flavoriz</strong>.
        </p>
      <Link to="/recipes">  <button className="explore-btn">
          Explore Recipes <span className="icon">🍽</span> 
        </button> </Link>
      </div>
    </section>

            {/* 2nd page  */}

            <section className="feature-wrap">
                <div className="feature-left">
                    <div className="feature-item">
                        <div className="icon-round">
                            <span className="ico user" aria-hidden="true" />
                        </div>
                        <div className="text">
                            <h3>User-Centered</h3>
                            <p>
                                Your feedback shapes our platform, ensuring a seamless and
                                satisfying culinary journey.
                            </p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="icon-round">
                            <span className="ico globe" aria-hidden="true" />
                        </div>
                        <div className="text">
                            <h3>Diverse Recipes</h3>
                            <p>
                                We celebrate diverse culinary traditions from around the world,
                                inspiring you today.
                            </p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="icon-round">
                            <span className="ico heart" aria-hidden="true" />
                        </div>
                        <div className="text">
                            <h3>Fun Community</h3>
                            <p>
                                We foster a vibrant foodie community where joy comes with sharing
                                recipes with us.
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="feature-right">
                    <div className="media">
                        <img
                            src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop"
                            alt="Plated assorted dishes"
                            className="hero-img"
                        />
                    </div>

                    <div className="player">
                        <button className="play-btn" aria-label="Play">
                            <span className="play-triangle" />
                        </button>
                        <span className="time">0:00 / 1:34</span>
                        <div className="progress">
                            <div className="bar" style={{ width: "58%" }} />
                        </div>
                        <Link className="see-recipe" href="" aria-label="See recipe" to="/recipes">
                            See Recipe
                        </Link>
                    </div>
                </aside>
            </section>

            {/* 3rd page  */}

            <header className="tacos-hero">
                {/* Background image layer */}
                <div className="tacos-hero__bg" aria-hidden="true" />

                {/* Content block */}
                <div className="tacos-hero__content">
                    <h1 className="tacos-hero__title">
                        Spicy Beef Mexican<br />Tacos
                    </h1>
                    <p className="tacos-hero__subtitle">
                        This mouthwatering dish combines juicy, seasoned beef with the vibrant flavors of
                        traditional Mexican cuisine.
                    </p>

                    <div className="tacos-hero__meta">
                        <div className="meta-item">
                            <span className="dot clock" aria-hidden="true" />
                            <span>15 minutes</span>
                        </div>
                        <div className="meta-item">
                            <span className="dot chef" aria-hidden="true" />
                            <span>Chef Maria Rodriguez</span>
                        </div>
                    </div>
                </div>

                {/* Floating action buttons (bottom-right) */}
                <div className="tacos-hero__float">
                    <button className="float-btn">
                   <span className="dot cart" aria-hidden="true" />
                        See  Details
                    </button>
                </div>
            </header>

            {/* 4th page */}

            <section className="popular-wrap">
                <div className="popular-head">
                    <h2 className="popular-title">
                        Popular <span className="accent">Recipes</span> Today
                    </h2>
                    <Link className="more-pill" to="/recipes">See More Recipes</Link>
                </div>

                <div className="card-grid">
                    {data.map((r, i) => (
                        <article className="recipe-card" key={i}>
                            <h3 className="card-title">{r.title}</h3>

                            <div className="image-wrap">
                                <img src={r.img} alt={r.title} loading="lazy" />
                                <div className="hover-layer">
                                    <div className="hover-copy">
                                        <h4 className="hover-title">Spicy Beef Mexican<br />Tacos</h4>
                                        <p className="hover-sub">This mouthwatering dish combines juicy, seasoned beef with the vibrant flavors of traditional Mexican cuisine.</p>
                                        <div className="hover-chips">
                                            <span className="chip">International Flavors</span>
                                            <span className="chip">Quick & Easy Supper</span>
                                            <span className="chip">Mexican Food</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button className="cta-bar">
                                <span>See Complete Recipe</span>
                                <span className="cta-icon" aria-hidden="true" />
                            </button>
                        </article>
                    ))}
                </div>
            </section>

     <Footer />

        </>
    );
}

export default Hero;
