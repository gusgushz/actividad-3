import { Recipe } from "../../../interfaces";
import './card-fav.css';
import { MdDelete } from "react-icons/md";

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
            <div className="btn-container">
              {
                onRemoveFromFavorites && (
                  <button className="btn-remove" onClick={() => onRemoveFromFavorites(recipe.id)}>
                    <MdDelete size={25} />
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
