import React, { useState } from "react";
import { Recipe } from "../../interfaces/";
import "./RecipeCard.css";
import { MdFavoriteBorder, MdFavorite  } from "react-icons/md";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean
  onAddToFavorites: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, isFavorite, onAddToFavorites }: RecipeCardProps) => {


  return (
    <div className="recipe-card">
      <div className="recipe-card-body">
        <div className="recipe-card-image"> 
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="recipe-card-content">
          <div  className="recipe-card-header">
            <h2>{recipe.name}</h2>
            <button 
              className={`btn-favorite ${isFavorite ? "active" : ""}`} 
              onClick={() => onAddToFavorites(recipe)}>
                {isFavorite ? <MdFavorite  size={15} /> : <MdFavoriteBorder size={15} />}
            </button>
          </div>
          <p>Categorías: {recipe.category.join(", ")}</p>
          <h3>Ingredientes</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Pasos</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

    </div>
  );
};
