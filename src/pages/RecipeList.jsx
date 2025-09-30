import React from "react";
import { api } from "../Api/client";
import { useNavigate } from "react-router-dom";
import "./RecipeList.css";
import Footer from "./Footer";

export default function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);
  const [activeCat, setActiveCat] = React.useState("All Types");
  const navigate = useNavigate();

  // Fetch recipes
  React.useEffect(() => {
    let alive = true;
    api.get("/recipes")
      .then(res => { if (alive) setRecipes(res.data); })
      .catch(e => setErr(e?.message || "Error"))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  // Categories
  const categories = React.useMemo(() => {
    const all = new Set(["All Types"]);
    recipes.forEach(r => ((r.tags && r.tags.length) ? r.tags : [r.category])
      .filter(Boolean)
      .forEach(t => all.add(t)));
    return Array.from(all);
  }, [recipes]);

  const visible = React.useMemo(() => {
    if (activeCat === "All Types") return recipes;
    return recipes.filter(r =>
      ((r.tags && r.tags.length) ? r.tags : [r.category]).includes(activeCat)
    );
  }, [recipes, activeCat]);

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      await api.delete(`/recipes/${id}`);
      setRecipes(recipes.filter(r => r.id !== id));
    } catch (error) {
      alert("Failed to delete recipe");
    }
  };

  // Handle Edit
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // Early returns
  if (loading) return <div className="state">Loading…</div>;
  if (err) return <div className="state error">Failed: {err}</div>;

  // Render
  return (
    <>
      <section className="culinary-banner">
        <div className="cb-content">
          <h2>Explore <span className="accent">Culinary</span> Insight</h2>
        </div>
      </section>

      <section className="what-to-cook">
        <h2 className="section-title">What to Cook?</h2>

        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map(card => (
            <article
              key={card.id}
              className="r-card"
              onClick={() => navigate(`/recipes/${card.id}`)} // 👈 navigate to detail
              style={{ cursor: "pointer" }}
            >
              <h3 className="r-title">{card.title}</h3>
              <div className="img-wrap">
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="hover-layer">
                  <div className="hover-copy">
                    <h4 className="hover-title">{card.title}</h4>
                    <p className="hover-sub">
                      {card.author ? `By ${card.author}` : "Discover tasty goodness"}
                    </p>
                    <div className="hover-chips">
                      {(card.tags || []).slice(0, 3).map((t, i) => (
                        <span className="chip" key={i}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-actions">
                <button className="edit-btn" onClick={(e) => { e.stopPropagation(); handleEdit(card.id); }}>
                  Edit
                </button>
                <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(card.id); }}>
                  Delete
                </button>
              </div>

              <button className="cta-bar">
                <span>{card.cta || "See Complete Recipe"}</span>
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
