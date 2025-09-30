import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../Api/client";
import "./RecipeDetail.css";

  function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((e) => setErr(e?.message || "Error fetching recipe"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading…</div>;
  if (err) return <div className="error">Error: {err}</div>;
  if (!recipe) return <div>No recipe found</div>;

  return (
    <section className="recipe-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h1>{recipe.title}</h1>
      <p>
        <strong>By:</strong> {recipe.author} &nbsp; | &nbsp;
        <strong>Chef:</strong> {recipe.chef || "Unknown"} &nbsp; | &nbsp;
        <strong>Duration:</strong> {recipe.duration}
      </p>

      <img src={recipe.image} alt={recipe.title} className="recipe-image" />

      <div className="recipe-tags">
        {(recipe.tags || []).map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <h2>Description</h2>
      <p>{recipe.description || "No description available."}</p>

      {recipe.ingredients && (
        <>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}

      {recipe.steps && (
        <>
          <h2>Steps</h2>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </>
      )}
    </section>
  );
}

export default RecipeDetails;