import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css"; // Asegúrate de crear este archivo CSS

const categories = [
  {
    title: "Postres",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6rBj7hEkiY_YbVrX5pp8iLFsLl4L5w6k6BqxfOgRAYum0HiB957fattY3pV9CRFeec4bx3NWOFKkODi0pUKolYLXd2ZCIZ2XQzsKIkc1GSQ4JiWPesRgDFTETkQIXOtxK_4fyFy2U-s_A/s1600/BeFunky-collage+%25281%2529.jpg",
    link: "../CategoriesRecetas/bebidas"
  },
  {
    title: "Bebidas",
    imageUrl: "https://st1.uvnimg.com/ff/02/b0af570f42138f53f71e73fd474d/recetas-bebidas-con-vino.jpg",
    link: "/recetas/bebidas"
  },
  {
    title: "Comidas",
    imageUrl: "https://i.blogs.es/742038/receetas-ligeras-3-ing/450_1000.jpg",
    link: "/recetas/entradas"
  },
  {
    title: "Pasta",
    imageUrl: "https://www.pequerecetas.com/wp-content/uploads/2024/09/recetas-de-pasta-italiana.jpg",
    link: "/recetas/pasta"
  },
  {
    title: "Tacos",
    imageUrl: "https://aquaworld.com.mx/uploads/0000/1/2023/05/01/tour4.jpg",
    link: "/recetas/tacos"
  }
];

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div
          className="category"
          key={index}
          onClick={() => handleCategoryClick(category.link)}
        >
          <h1 className="category-title">{category.title}</h1>
          <img
            className="category-image"
            src={category.imageUrl}
            alt={`Imagen de ${category.title}`}
          />
        </div>
      ))}
    </div>
  );
};



