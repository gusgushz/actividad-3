import React from "react";
import { Recipe } from "../../../interfaces";
import './card-fav.css';

interface RecipeCardFavProps {
  recipe: Recipe
  onRemoveFromFavorites?: (recipeId: number) => void;
}

export const CardFavorites = ({recipe, onRemoveFromFavorites}: RecipeCardFavProps) => {
  return (
    <div className="recipe-card-fav">
      <div className="card-fav-body">
        <div className="card-fav-image">
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="card-fav-content">
          <div className="card-fav-header">
            <h2 className="title">{recipe.name}</h2>
            {
              onRemoveFromFavorites && (
                <button className="btn-remove" onClick={() => onRemoveFromFavorites(recipe.id)}>Eliminar</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
