import { Route, Routes } from "react-router-dom";
import {RecetasPostres} from "../presentation/pages/Categories/CategoriesRecetas/postres";
import {RecetasBebidas} from "../presentation/pages/Categories/CategoriesRecetas/bebidas";
import {RecetasComidas} from "../presentation/pages/Categories/CategoriesRecetas/comidas";
import {RecetasPastas} from "../presentation/pages/Categories/CategoriesRecetas/pastas";

const AppRoutesRecetas: React.FC = () => (
  <Routes>
    <Route path="/recetas/postres" element={<RecetasPostres />} />
    <Route path="/recetas/bebidas" element={<RecetasBebidas />} />
    <Route path="/recetas/comidas" element={<RecetasComidas />} />
    <Route path="/recetas/pastas" element={<RecetasPastas />} />
  </Routes>
);

export default AppRoutesRecetas;