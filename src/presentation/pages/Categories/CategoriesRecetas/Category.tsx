import React from "react";
import { Recipe } from "../../../../interfaces";
import Data from "../../../../data/recipies.json";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../../../components/RecipeCard";
import "./category.css";


export const Category = () => {
    const Recipes: Recipe[] = Data;
    const params = useParams();
console.log(params.title);

    return (
        <div className="category-container">
          
          {Recipes.filter(recipe => recipe.category.some(category => category === params.title)).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      );
};
