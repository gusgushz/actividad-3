import { CardFavorites } from '../../components/favorites/card-fav';
import './Favorites.css';
import { useFavorites } from "../../components/favorites/context-fav";



export const Favorites = () => {
  const {favorites, removeFromFavorites} = useFavorites();


  return (
    <section id='favorites'>
      <h1 className='title'>Favoritos</h1>
      {favorites.length === 0 ? ( // Verificar si hay favoritos
        <div className='container-no-favorites'>
          <p>No tienes recetas en favoritos aún. ¡Escoge tus favoritas!</p>
        </div>
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
