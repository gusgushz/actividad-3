import React, { useState } from "react";
import { Recipe } from "../../../interfaces";
import { RecipeCard } from "../RecipeCard";
import { CardFavorites } from "./card-fav";
import data from "../../../data/recipies.json";

export const RecipesPage = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const handleAddToFavorites = (recipe: Recipe) => {
    setFavorites((prev) => {
      // Evitar duplicados
      if (prev.some((fav) => fav.id === recipe.id)) {
        return prev.filter((fav) => fav.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  const isFavorite = (recipeId: number) => {
    return favorites.some((fav) => fav.id === recipeId);
  }

  return (
    <div className="recipes-page">
      <h1>Recetas</h1>
      <div className="recipes-list">
        {data.map((recipe) => (
          <RecipeCard 
            key={recipe.id} recipe={recipe} 
            isFavorite={isFavorite(recipe.id)}
            onAddToFavorites={handleAddToFavorites} 
          />
        ))}
      </div>

      <h1>Favoritos</h1>
      <div className="favorites-list">
        {favorites.map((recipe) => (
          <CardFavorites key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </div>
  );
};
