import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../Api/client';
import './RecipeForm.css';
import Footer from './Footer';

const RecipeForm = () => {
  const { id } = useParams(); // 👈 get id from URL
  const [title, setTitle] = useState("");
  const [imageData, setImageData] = useState(""); // base64 image
  const [imageFile, setImageFile] = useState(null);
  const [duration, setDuration] = useState("");
  const [author, setAuthor] = useState("");
  const [chef, setChef] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const navigate = useNavigate();

  // Fetch existing recipe if editing
  useEffect(() => {
    if (id) {
      api.get(`/recipes/${id}`)
        .then(res => {
          const r = res.data;
          setTitle(r.title);
          setImageData(r.image);
          setDuration(r.duration);
          setAuthor(r.author);
          setChef(r.chef);
          setTags((r.tags || []).join(", "));
          setDescription(r.description || "");
          setIngredients((r.ingredients || []).join("\n"));
          setSteps((r.steps || []).join("\n"));
        })
        .catch(err => alert("Failed to load recipe"));
    }
  }, [id]);

  // Convert file to base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setImageData(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      image: imageData,
      duration,
      author,
      chef,
      tags: tags.split(",").map(t => t.trim()),
      description,
      ingredients: ingredients.split("\n").map(i => i.trim()),
      steps: steps.split("\n").map(s => s.trim()),
      cta: "See Complete Recipe"
    };

    try {
      if (id) {
        // Edit mode
        await api.put(`/recipes/${id}`, newRecipe);
        alert("Recipe updated successfully!");
      } else {
        // Add new recipe
        await api.post("/recipes", newRecipe);
        alert("Recipe added successfully!");
      }
      navigate("/recipes");
    } catch (error) {
      alert("Failed to submit recipe");
    }
  };

  return (
    <>
     <section className="rs-hero">
      <div className="rs-content">
        <h2>
          Recipe <span className="accent">Submission</span><br />
          Form
        </h2>
      </div>
    </section>
    <div className="container mt-4">
      <h2>{id ? "Edit Recipe" : "Add Recipe"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="form-control mb-2"
          onChange={handleImageChange}
        />

        {/* preview uploaded or existing image */}
        {imageData && <img src={imageData} alt="preview" style={{maxWidth:'200px', marginBottom:'10px'}} />}

        <input
          className="form-control mb-2"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Chef Name"
          value={chef}
          onChange={(e) => setChef(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button className="btn btn-success">{id ? "Update Recipe" : "Add Recipe"}</button>
      </form>
    </div>

    <Footer />
    </>
  );
};

export default RecipeForm;
