import React from "react";
import { Recipe } from "../../../interfaces";

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
            <h2>{recipe.name}</h2>
            {
              onRemoveFromFavorites && (
                <button onClick={() => onRemoveFromFavorites(recipe.id)}>Eliminar</button>
              )
            }
          </div>
      </div>
    </div>
      <h1>Favoritos</h1>
    </div>
  );
};
