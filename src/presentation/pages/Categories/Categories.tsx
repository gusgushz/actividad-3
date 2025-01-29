import React from "react";
import { NavLink, useNavigate, useNavigation } from "react-router";
import "./Categories.css"; // Asegúrate de crear este archivo CSS

const categories = [
  {
    title: "Comida mexicana",
    imageUrl: "https://editorialtelevisa.brightspotcdn.com/dims4/default/b91caa2/2147483647/strip/false/crop/1200x672+0+0/resize/1200x672!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6b%2F59%2Fae19ff0c42029062b2f3d03d3b1f%2Fmejores-recetas-de-comida-mexicana.jpeg",
    link: "/recetas/tacos"
  },
  {
    title: "Tacos de pescado",
    imageUrl: "https://mojo.generalmills.com/api/public/content/emm57XARWE2tUveq8Vg8EA_gmi_hi_res_jpeg.jpeg?v=0dcb2463&t=16e3ce250f244648bef28c5949fb99ff",
    link: "/recetas/bebidas"
  },
  {
    title: "Tacos dorados",
    imageUrl: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2024/07/tacos-dorados-queso.jpg",
    link: "/recetas/entradas"
  },
  {
    title: "Tacos de guisado",
    imageUrl: "https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F42YF5trfjsN64pJQKoNW8M%2F04f4aeb7aec6f6cc8a03ec2ec55602b7%2Fun-gustito-con-tacos-de-guisados.jpg&w=828&q=75",
    link: "/recetas/pasta"
  },
];

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (title: string, imageUrl: string) => {
    navigate(`/Category/${title}`,);
  };

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div
          className="category"
          key={index}
          onClick={() => handleCategoryClick(category.title, category.imageUrl)}
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



