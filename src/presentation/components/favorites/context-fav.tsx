import React, { createContext, useContext, useEffect, useState } from "react";
import { Recipe } from "../../../interfaces";

interface FavoritesContextProps {
    favorites: Recipe[];
    addToFavorites: (recipe: Recipe) => void;
    removeFromFavorites: (recipeId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children}) => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (recipe: Recipe) => {
        setFavorites((prev) => [...prev, recipe]);
    };
    
      const removeFromFavorites = (recipeId: number) => {
        setFavorites((prev) => prev.filter((recipe) => recipe.id !== recipeId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}