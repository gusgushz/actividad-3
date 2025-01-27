import { Recipe } from "../../interfaces/";
import "./RecipeCard.css";
import { MdFavoriteBorder, MdFavorite  } from "react-icons/md";
import { useFavorites } from "./favorites/context-fav";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  }

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
              onClick={() => toggleFavorite()}>
                {isFavorite ? <MdFavorite  size={25} /> : <MdFavoriteBorder size={25} />}
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
