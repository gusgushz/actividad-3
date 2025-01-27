
import "./Home.css";
import { RecipeCard } from "../../components/";
import { Recipe } from "../../../interfaces";
import data from "../../../data/recipies.json";


export const Home = () => {

  return (
    <div>
      <div id="carrusel">
        <div className="carrusel">
          <div className="image-container">
            <img
              src="https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg"
              alt="Receta 1"
            />
          </div>
          <div className="image-container">
            <img
              src="https://assets.unileversolutions.com/recipes-v2/117191.jpg"
              alt="Receta 2"
            />
          </div>
          <div className="image-container">
            <img
              src="https://images.mrcook.app/recipe-image/01918a37-3c17-73be-8625-77c52c18a5d2"
              alt="Receta 3"
            />
          </div>
          <div className="image-container">
            <img
              src="https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg"
              alt="Receta 4"
            />
          </div>
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1217897368/es/foto/sandwich-cochinita-pibil-comida-tradicional-de-yucat%C3%A1n.jpg?s=612x612&w=0&k=20&c=tZtvN1IqFVddQ5GnM2e3qD2bD3EqXdkPebWiip7zY48="
              alt="Receta 5"
            />
          </div>
        </div>
        <div aria-hidden className="carrusel">
          <div className="image-container">
            <img
              src="https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg"
              alt="Receta 1"
            />
          </div>
          <div className="image-container">
            <img
              src="https://assets.unileversolutions.com/recipes-v2/117191.jpg"
              alt="Receta 2"
            />
          </div>
          <div className="image-container">
            <img
              src="https://images.mrcook.app/recipe-image/01918a37-3c17-73be-8625-77c52c18a5d2"
              alt="Receta 3"
            />
          </div>
          <div className="image-container">
            <img
              src="https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg"
              alt="Receta 4"
            />
          </div>
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1217897368/es/foto/sandwich-cochinita-pibil-comida-tradicional-de-yucat%C3%A1n.jpg?s=612x612&w=0&k=20&c=tZtvN1IqFVddQ5GnM2e3qD2bD3EqXdkPebWiip7zY48="
              alt="Receta 5"
            />
          </div>
        </div>
        <div aria-hidden className="carrusel">
          <div className="image-container">
            <img
              src="https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg"
              alt="Receta 1"
            />
          </div>
          <div className="image-container">
            <img
              src="https://assets.unileversolutions.com/recipes-v2/117191.jpg"
              alt="Receta 2"
            />
          </div>
          <div className="image-container">
            <img
              src="https://images.mrcook.app/recipe-image/01918a37-3c17-73be-8625-77c52c18a5d2"
              alt="Receta 3"
            />
          </div>
          <div className="image-container">
            <img
              src="https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg"
              alt="Receta 4"
            />
          </div>
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1217897368/es/foto/sandwich-cochinita-pibil-comida-tradicional-de-yucat%C3%A1n.jpg?s=612x612&w=0&k=20&c=tZtvN1IqFVddQ5GnM2e3qD2bD3EqXdkPebWiip7zY48="
              alt="Receta 5"
            />
          </div>
        </div>
      </div>
      <section id="recetas">
        <h2>Nuestras Recestas</h2>
        <div className="recipe-grid">
          {data.map((recipe: Recipe, index) => (
            <RecipeCard 
              key={index} 
              recipe={recipe} 
              ></RecipeCard>
          ))}
        </div>
      </section>
      <aside>
        <h3>Consejos de Cocina</h3>
        <p>Sigue nuestros consejos para mejorar tus habilidades culinarias.</p>
      </aside>
      <div>{/* <RecipeCard recipe={recipe} /> */}</div>
    </div>
  );
};

