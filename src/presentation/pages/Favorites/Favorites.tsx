import React, { useState } from "react";
import { CardFavorites } from '../../components/favorites/card-fav';
import data from "../../../data/recipies.json";
import { Recipe } from "../../../interfaces";



export const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const handleRemoveFromFavorites = (recipeId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((recipe) => recipe.id !== recipeId)
    );
  }

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.length === 0 ? ( // Verificar si hay favoritos
        <p>No tienes recetas en favoritos. ¡Agrega algunas!</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <CardFavorites
              key={recipe.id}
              recipe={recipe}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};
