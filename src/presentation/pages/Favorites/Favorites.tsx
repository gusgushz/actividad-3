import { CardFavorites } from '../../components/favorites/card-fav';
import './Favorites.css';
import { useFavorites } from "../../components/favorites/context-fav";



export const Favorites = () => {
  const {favorites, removeFromFavorites} = useFavorites();


  return (
    <section id='favorites'>
      <h1>Favoritos</h1>
      {favorites.length === 0 ? ( // Verificar si hay favoritos
        <p>No tienes recetas en favoritos. ¡Agrega algunas!</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <CardFavorites
              key={recipe.id}
              recipe={recipe}
              onRemoveFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </section>
  );
};
